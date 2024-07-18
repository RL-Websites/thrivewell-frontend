import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import { CtaComponent } from '../components/cta/cta.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { LoaderComponent } from '../components/loader/loader.component';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  styles: ``,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterLink,
    CommonModule,
    CtaComponent,
    LoaderComponent,
  ],
})
export class HomeComponent implements OnInit {
  counters = [
    {
      id: '1',
      label: 'Prescriptions Written',
      number: 200,
      duration: 3,
      currentValue: 0,
      animated: false,
    },
    {
      id: '2',
      label: 'States Licensed',
      number: 40,
      duration: 3,
      currentValue: 0,
      animated: false,
    },
    {
      id: '3',
      label: 'Happy Patients Served',
      number: 50,
      duration: 3,
      currentValue: 0,
      animated: false,
    },
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
    this.counters.forEach((counter) => this.animateCounter(counter));
  }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const scrollTop =
      window.pageYOffset ||
      document.documentElement.scrollTop ||
      document.body.scrollTop ||
      0;

    if (scrollTop) {
      this.counters.forEach((counter) => {
        if (!counter.animated) {
          this.animateCounter(counter);
          counter.animated = true;
        }
      });
    } else {
      this.counters.forEach((counter) => {
        counter.animated = false;
      });
    }
  }

  animateCounter(counter: any): void {
    const startValue = 0;
    const endValue = counter.number;
    const duration = counter.duration * 500;
    const stepTime = Math.abs(Math.floor(duration / endValue));

    let currentValue = startValue;

    const timer = setInterval(() => {
      currentValue += 1;
      counter.currentValue = currentValue;
      if (currentValue >= endValue) {
        clearInterval(timer);
      }
    }, stepTime);
  }
}
