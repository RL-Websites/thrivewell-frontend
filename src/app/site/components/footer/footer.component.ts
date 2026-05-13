import { isPlatformBrowser } from '@angular/common';
import { Component, Inject, PLATFORM_ID } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import AOS from 'aos';
@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterModule, RouterLink],
  templateUrl: './footer.component.html',
  styles: ``,
})
export class FooterComponent {
  currentYear: number = new Date().getFullYear();
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }
}
