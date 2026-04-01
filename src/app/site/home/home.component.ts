import { CommonModule, isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  HostListener,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import { RouterLink } from '@angular/router';
import AOS from 'aos';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { CtaComponent } from '../components/cta/cta.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';

Swiper.use([Autoplay, Navigation]);

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
    ContactFormComponent,
  ],
})
export class HomeComponent implements OnInit, AfterViewInit {
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
      number: 50,
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

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      new Swiper('.work-slider', {
        spaceBetween: 60,
        loop: true,
        centeredSlides: true,
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        breakpoints: {
          0: {
            slidesPerView: 1,
            spaceBetween: 15,
          },
          576: {
            slidesPerView: 1.4,
            spaceBetween: 20,
            centeredSlides: false,
          },
          1024: {
            slidesPerView: 3.2,
            spaceBetween: 50,
          },
        },
      });
    }
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
    const duration = counter.duration * 1500;
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
