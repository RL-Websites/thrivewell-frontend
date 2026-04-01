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
import { NgbCollapse, NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';
import AOS from 'aos';

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
  /** Subrayado activo del ítem Product cuando la ruta es /product/... */
  isProductRoute = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2,
    private router: Router
  ) {}

  ngOnInit(): void {
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
    if (isPlatformBrowser(this.platformId)) {
      this.renderer.setStyle(document.body, 'overflow', 'auto');
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
