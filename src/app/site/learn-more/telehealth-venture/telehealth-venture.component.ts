import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { OtherBannerFrameComponent } from '../../components/other-banner-frame/other-banner-frame.component';
import { ContactSectionComponent } from '../components/contact-section/contact-section.component';

@Component({
  selector: 'app-telehealth-venture',
  standalone: true,
  imports: [
    FooterComponent,
    ContactSectionComponent,
    OtherBannerFrameComponent,
    HeaderComponent,
  ],
  templateUrl: './telehealth-venture.component.html',
  styles: ``,
})
export class TelehealthVentureComponent {}
