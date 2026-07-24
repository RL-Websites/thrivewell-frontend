import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../environments/environment';

type GtagFn = (...args: unknown[]) => void;

declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: GtagFn;
  }
}

@Injectable({ providedIn: 'root' })
export class AnalyticsService {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly measurementId = environment.gaMeasurementId;

  private initialized = false;

  /** Loads Google Analytics and starts tracking route changes. Safe to call once from the root component. */
  init(): void {
    // Never run on the server (SSR) or if already initialized or if no measurement id is configured.
    if (
      this.initialized ||
      !isPlatformBrowser(this.platformId) ||
      !this.measurementId
    ) {
      return;
    }
    this.initialized = true;

    this.loadGtagScript();
    this.trackRouteChanges();
  }

  /** Sends a custom event to GA (no-op when analytics is disabled). */
  event(name: string, params: Record<string, unknown> = {}): void {
    window.gtag?.('event', name, params);
  }

  private loadGtagScript(): void {
    const id = this.measurementId;

    // Set up the dataLayer + gtag stub before the external script loads.
    window.dataLayer = window.dataLayer || [];
    window.gtag = function gtag() {
      // eslint-disable-next-line prefer-rest-params
      window.dataLayer!.push(arguments);
    };

    window.gtag('js', new Date());
    // Disable automatic page views so SPA route changes are the single source of truth.
    window.gtag('config', id, { send_page_view: false });

    const script = document.createElement('script');
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(script);
  }

  private trackRouteChanges(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => {
        window.gtag?.('config', this.measurementId, {
          page_path: e.urlAfterRedirects,
        });
      });
  }
}
