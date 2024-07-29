import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnDestroy,
  PLATFORM_ID,
  Renderer2,
} from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
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

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private renderer: Renderer2
  ) {}

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
