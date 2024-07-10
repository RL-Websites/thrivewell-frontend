import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { OtherBannerFrameComponent } from '../../components/other-banner-frame/other-banner-frame.component';
import { ContactSectionComponent } from '../components/contact-section/contact-section.component';

@Component({
  selector: 'app-telehealth-success-partner',
  standalone: true,
  imports: [
    HeaderComponent,
    OtherBannerFrameComponent,
    ContactSectionComponent,
    FooterComponent,
  ],
  templateUrl: './telehealth-success-partner.component.html',
  styles: ``,
})
export class TelehealthSuccessPartnerComponent {}
