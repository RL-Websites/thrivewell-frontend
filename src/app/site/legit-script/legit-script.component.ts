import { isPlatformBrowser } from '@angular/common';
import {
  AfterViewInit,
  Component,
  Inject,
  OnInit,
  PLATFORM_ID,
} from '@angular/core';
import AOS from 'aos';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { CtaComponent } from '../components/cta/cta.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { LegitscriptContactComponent } from '../components/legitscript-contact/legitscript-contact.component';
import { OtherBannerFrameComponent } from '../components/other-banner-frame/other-banner-frame.component';

Swiper.use([Autoplay, Navigation]);

@Component({
  selector: 'app-legit-script',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    OtherBannerFrameComponent,
    LegitscriptContactComponent,
    CtaComponent,
  ],
  templateUrl: './legit-script.component.html',
  styles: ``,
})
export class LegitScriptComponent implements AfterViewInit, OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      AOS.init();
    }
  }

  ngAfterViewInit(): void {
    new Swiper('.client-slider', {
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
