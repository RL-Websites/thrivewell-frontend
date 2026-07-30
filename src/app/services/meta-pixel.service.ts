import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';
import { environment } from '../../environments/environment';

type FbqFn = ((...args: unknown[]) => void) & {
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[];
  loaded: boolean;
  version: string;
  push: unknown;
};

declare global {
  interface Window {
    fbq?: FbqFn;
    _fbq?: FbqFn;
  }
}

@Injectable({ providedIn: 'root' })
export class MetaPixelService {
  private readonly router = inject(Router);
  private readonly platformId = inject(PLATFORM_ID);
  private readonly pixelId = environment.metaPixelId;

  private initialized = false;
  private lastTrackedPath: string | null = null;

  /** Loads the Meta Pixel and starts tracking route changes. Safe to call once from the root component. */
  init(): void {
    // Never run on the server (SSR) or if already initialized or if no pixel id is configured.
    if (
      this.initialized ||
      !isPlatformBrowser(this.platformId) ||
      !this.pixelId
    ) {
      return;
    }
    this.initialized = true;

    this.loadPixelScript();

    // Track the initial (landing) page explicitly, for the same reason as in
    // AnalyticsService: with SSR the router's initial navigation can complete
    // before the subscription below exists.
    this.sendPageView(this.router.url);
    this.trackRouteChanges();
  }

  /** Sends a Meta standard event (no-op when the pixel is disabled). */
  track(name: string, params: Record<string, unknown> = {}): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }
    window.fbq?.('track', name, params);
  }

  private loadPixelScript(): void {
    // Set up the fbq stub so events queue up before the external script loads.
    const stub = ((...args: unknown[]) => {
      if (stub.callMethod) {
        stub.callMethod(...args);
        return;
      }
      stub.queue.push(args);
    }) as FbqFn;

    stub.queue = [];
    stub.loaded = true;
    stub.version = '2.0';
    stub.push = stub;

    window.fbq = stub;
    window._fbq = window._fbq || stub;

    // Init only — no automatic PageView here, so SPA route changes stay the
    // single source of truth (mirrors send_page_view: false on the GA side).
    stub('init', this.pixelId);

    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://connect.facebook.net/en_US/fbevents.js';
    document.head.appendChild(script);
  }

  private trackRouteChanges(): void {
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe((e) => this.sendPageView(e.urlAfterRedirects));
  }

  /** Sends a PageView, skipping duplicate consecutive paths. */
  private sendPageView(path: string): void {
    if (path === this.lastTrackedPath) {
      return;
    }
    this.lastTrackedPath = path;
    window.fbq?.('track', 'PageView');
  }
}
