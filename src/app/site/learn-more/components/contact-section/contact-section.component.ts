import { Component } from '@angular/core';
import { ContactFormComponent } from '../../../components/contact-form/contact-form.component';

@Component({
  selector: 'contact-section',
  standalone: true,
  imports: [ContactFormComponent],
  templateUrl: './contact-section.component.html',
  styles: ``,
})
export class ContactSectionComponent {}
