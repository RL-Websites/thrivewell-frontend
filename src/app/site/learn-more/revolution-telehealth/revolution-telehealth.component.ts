import { Component } from '@angular/core';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { OtherBannerFrameComponent } from '../../components/other-banner-frame/other-banner-frame.component';
import { ContactSectionComponent } from '../components/contact-section/contact-section.component';

@Component({
  selector: 'app-revolution-telehealth',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    ContactSectionComponent,
    OtherBannerFrameComponent,
  ],
  templateUrl: './revolution-telehealth.component.html',
  styles: ``,
})
export class RevolutionTelehealthComponent {}
