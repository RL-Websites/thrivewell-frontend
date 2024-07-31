import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { OtherBannerFrameComponent } from '../components/other-banner-frame/other-banner-frame.component';

@Component({
  selector: 'app-privacy-policy',
  standalone: true,
  imports: [FooterComponent, OtherBannerFrameComponent, HeaderComponent],
  templateUrl: './privacy-policy.component.html',
  styles: ``,
})
export class PrivacyPolicyComponent {}
