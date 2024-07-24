import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { OtherBannerFrameComponent } from '../components/other-banner-frame/other-banner-frame.component';

@Component({
  selector: 'app-solutions',
  standalone: true,
  imports: [OtherBannerFrameComponent, HeaderComponent, FooterComponent],
  templateUrl: './solutions.component.html',
  styles: ``,
})
export class SolutionsComponent {}
