import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  HostListener,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { NgbCollapse } from '@ng-bootstrap/ng-bootstrap';
import AOS from 'aos';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [RouterLink, RouterModule, CommonModule, NgbCollapse],
  templateUrl: './header.component.html',
  styles: ``,
})
export class HeaderComponent implements AfterViewInit, OnDestroy {
  routerLink: any;
  public isCollapsed = true;
  public isSolutionsOpen = false;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router,
    private renderer: Renderer2,
    private elementRef: ElementRef<HTMLElement>,
  ) {}

  get logoUrl(): string {
    return this.router.url.startsWith('/flow-rx')
      ? 'images/flowrx-logo.svg'
      : 'images/thrivewell-logo.svg';
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

  toggleSolutionsMenu(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.isSolutionsOpen = !this.isSolutionsOpen;
  }

  @HostListener('document:click', ['$event'])
  closeSolutionsMenu(event: Event) {
    if (!this.isSolutionsOpen) {
      return;
    }

    const target = event.target as HTMLElement;
    if (!this.elementRef.nativeElement.contains(target)) {
      this.isSolutionsOpen = false;
    }
  }
}
