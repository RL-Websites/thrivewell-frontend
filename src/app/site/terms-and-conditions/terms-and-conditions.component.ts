import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { OtherBannerFrameComponent } from '../components/other-banner-frame/other-banner-frame.component';

@Component({
  selector: 'app-terms-and-conditions',
  standalone: true,
  imports: [HeaderComponent, OtherBannerFrameComponent, FooterComponent],
  templateUrl: './terms-and-conditions.component.html',
  styles: ``,
})
export class TermsAndConditionsComponent {}
