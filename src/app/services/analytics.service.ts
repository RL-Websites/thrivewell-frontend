import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router, NavigationEnd } from '@angular/router';
import { normalizeAnalyticsPath } from '@app/helper/helper';
import { filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';

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
  private lastTrackedPath: string | null = null;

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

    // Track the landing page from the real browser location, not router.url.
    // provideRouter() defaults to non-blocking initial navigation, which runs
    // in an APP_BOOTSTRAP_LISTENER — i.e. after this component's ngOnInit — so
    // router.url is still '/' at this point. Using it would report '/' as the
    // landing page and then fire a second page_view for the real one.
    this.sendPageView(window.location.pathname + window.location.search);
    this.trackRouteChanges();
  }

  /** Sends a custom event to GA (no-op when analytics is disabled). */
  event(name: string, params: Record<string, unknown> = {}): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
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
      .subscribe((e) => this.sendPageView(e.urlAfterRedirects));
  }

  /** Sends an explicit GA4 page_view event, skipping duplicate consecutive paths. */
  private sendPageView(path: string): void {
    // Compare on the bare path so the landing page tracked above and the
    // router's own '/book-now?fbclid=...' are recognised as the same page.
    // The full path (query included) is still what gets reported to GA.
    const key = normalizeAnalyticsPath(path);
    if (key === this.lastTrackedPath) {
      return;
    }
    this.lastTrackedPath = key;
    window.gtag?.('event', 'page_view', {
      page_path: path,
      page_location: window.location.href,
      page_title: document.title,
    });
  }
}
