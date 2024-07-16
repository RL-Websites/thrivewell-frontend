import { CommonModule, isPlatformBrowser } from '@angular/common';
import { AfterViewInit, Component, Inject, PLATFORM_ID } from '@angular/core';
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
export class HeaderComponent implements AfterViewInit {
  routerLink: any;
  public isCollapsed = true;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}
