import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  OnInit,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import {
  NavigationEnd,
  PRIMARY_OUTLET,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterModule,
} from '@angular/router';
import { filter } from 'rxjs';
import {
  NgbCollapse,
  NgbDropdown,
  NgbDropdownModule,
} from '@ng-bootstrap/ng-bootstrap';
import AOS from 'aos';

const PRODUCT_DROPDOWN_CLOSE_DELAY_MS = 150;

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    RouterModule,
    CommonModule,
    NgbCollapse,
    NgbDropdownModule,
  ],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent implements OnInit, AfterViewInit, OnDestroy {
  routerLink: any;
  public isCollapsed = true;
  /** Active underline on the Product item when route is /product/... */
  isProductRoute = false;
  /** Hover to open menu; without hover (touch) the button click is used */
  prefersHover = false;
  private productDropdownCloseTimer: ReturnType<typeof setTimeout> | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.prefersHover = window.matchMedia('(hover: hover)').matches;
    }
    this.syncProductRoute();
    this.router.events
      .pipe(filter((e): e is NavigationEnd => e instanceof NavigationEnd))
      .subscribe(() => this.syncProductRoute());
  }

  private syncProductRoute(): void {
    const tree = this.router.parseUrl(this.router.url);
    const primary = tree.root.children[PRIMARY_OUTLET];
    const first = primary?.segments[0]?.path;
    this.isProductRoute = first === 'product';
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  ngOnDestroy(): void {
    if (this.productDropdownCloseTimer !== null) {
      clearTimeout(this.productDropdownCloseTimer);
      this.productDropdownCloseTimer = null;
    }
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.setStyle(document.body, 'overflow', 'auto');
    }
  }

  onProductDropdownMouseEnter(dropdown: NgbDropdown): void {
    if (!this.prefersHover) {
      return;
    }
    if (this.productDropdownCloseTimer !== null) {
      clearTimeout(this.productDropdownCloseTimer);
      this.productDropdownCloseTimer = null;
    }
    dropdown.open();
  }

  onProductDropdownMouseLeave(dropdown: NgbDropdown): void {
    if (!this.prefersHover) {
      return;
    }
    this.productDropdownCloseTimer = setTimeout(() => {
      dropdown.close();
      this.productDropdownCloseTimer = null;
    }, PRODUCT_DROPDOWN_CLOSE_DELAY_MS);
  }

  onProductButtonClick(event: MouseEvent, dropdown: NgbDropdown): void {
    if (this.prefersHover) {
      return;
    }
    event.preventDefault();
    dropdown.toggle();
  }

  onProductDropdownKeydown(event: KeyboardEvent, dropdown: NgbDropdown): void {
    const k = event.key;
    if (
      k === 'ArrowDown' ||
      k === 'ArrowUp' ||
      k === 'Home' ||
      k === 'End' ||
      k === 'Tab'
    ) {
      dropdown.onKeyDown(event);
    }
  }

  toggleNavbar() {
    this.isCollapsed = !this.isCollapsed;
    if (isPlatformBrowser(this.platformId)) {
      if (this.isCollapsed) {
        this.renderer.setStyle(document.body, 'overflow', 'auto');
      } else {
        this.renderer.setStyle(document.body, 'overflow', 'hidden');
      }
    }
  }
}
