import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styles: ``,
  imports: [HeaderComponent, FooterComponent, RouterLink],
})
export class HomeComponent {}
