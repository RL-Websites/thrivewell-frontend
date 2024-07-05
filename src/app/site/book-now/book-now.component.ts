import { Component } from '@angular/core';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-book-now',
  standalone: true,
  templateUrl: './book-now.component.html',
  styles: ``,
  imports: [HeaderComponent, FooterComponent, ContactFormComponent],
})
export class BookNowComponent {}
