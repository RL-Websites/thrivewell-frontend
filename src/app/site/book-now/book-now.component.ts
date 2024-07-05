import { Component } from '@angular/core';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-book-now',
  standalone: true,
  imports: [HeaderComponent, FooterComponent],
  templateUrl: './book-now.component.html',
  styles: ``,
})
export class BookNowComponent {}
