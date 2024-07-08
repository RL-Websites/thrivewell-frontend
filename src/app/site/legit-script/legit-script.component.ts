import { Component } from '@angular/core';
import Swiper from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Autoplay, Navigation } from 'swiper/modules';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { OtherBannerFrameComponent } from '../components/other-banner-frame/other-banner-frame.component';

Swiper.use([Autoplay, Navigation]);

@Component({
  selector: 'app-legit-script',
  standalone: true,
  templateUrl: './legit-script.component.html',
  styles: ``,
  imports: [HeaderComponent, FooterComponent, OtherBannerFrameComponent],
})
export class LegitScriptComponent {
  ngAfterViewInit(): void {
    new Swiper('.client-slide', {
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,

      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        0: {
          slidesPerView: 1.3,
          spaceBetween: 15,
        },
        576: {
          slidesPerView: 3.4,
          spaceBetween: 50,
        },
      },
    });
  }
}
