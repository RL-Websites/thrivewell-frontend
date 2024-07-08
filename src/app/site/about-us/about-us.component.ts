import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { OtherBannerFrameComponent } from '../components/other-banner-frame/other-banner-frame.component';

@Component({
  selector: 'app-about-us',
  standalone: true,
  templateUrl: './about-us.component.html',
  styles: ``,
  imports: [HeaderComponent, FooterComponent, OtherBannerFrameComponent],
})
export class AboutUsComponent {}
