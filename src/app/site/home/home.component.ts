import { AfterViewInit, Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import * as AOS from 'aos';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styles: ``,
  imports: [HeaderComponent, FooterComponent, RouterLink],
})
export class HomeComponent implements OnInit, AfterViewInit {
  ngAfterViewInit(): void {
    AOS.init();
  }
  ngOnInit(): void {}
}
