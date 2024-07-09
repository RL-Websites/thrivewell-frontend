import { Component } from '@angular/core';
import { ContactFormComponent } from '../../components/contact-form/contact-form.component';
import { FooterComponent } from '../../components/footer/footer.component';
import { HeaderComponent } from '../../components/header/header.component';
import { OtherBannerFrameComponent } from '../../components/other-banner-frame/other-banner-frame.component';
import { ContactSectionComponent } from '../components/contact-section/contact-section.component';

@Component({
  selector: 'app-simplify-ecommerce',
  standalone: true,
  imports: [
    HeaderComponent,
    OtherBannerFrameComponent,
    ContactFormComponent,
    FooterComponent,
    ContactSectionComponent,
  ],
  templateUrl: './simplify-ecommerce.component.html',
  styles: ``,
})
export class SimplifyEcommerceComponent {}
