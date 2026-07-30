import { isPlatformBrowser } from '@angular/common';
import { Injectable, PLATFORM_ID, inject } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { normalizeAnalyticsPath } from '@app/helper/helper';
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

    // Track the landing page from the real browser location, not router.url.
    // provideRouter() defaults to non-blocking initial navigation, which runs
    // in an APP_BOOTSTRAP_LISTENER — i.e. after this component's ngOnInit — so
    // router.url is still '/' at this point. Using it would report the wrong
    // page here and then fire a second, duplicate PageView on NavigationEnd.
    this.sendPageView(window.location.pathname);
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
    // Compare on the bare path so the landing page tracked above and the
    // router's own '/book-now?fbclid=...' are recognised as the same page.
    const key = normalizeAnalyticsPath(path);
    if (key === this.lastTrackedPath) {
      return;
    }
    this.lastTrackedPath = key;
    window.fbq?.('track', 'PageView');
  }
}
