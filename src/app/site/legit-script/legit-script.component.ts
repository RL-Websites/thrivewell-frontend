import { CommonModule } from '@angular/common';
import {
  AfterViewInit,
  CUSTOM_ELEMENTS_SCHEMA,
  Component,
  ElementRef,
  ViewChild,
} from '@angular/core';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SwiperContainer } from 'swiper/element';
import { register as swiperRegister } from 'swiper/element/bundle';
import { ContactFormComponent } from '../components/contact-form/contact-form.component';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { OtherBannerFrameComponent } from '../components/other-banner-frame/other-banner-frame.component';

swiperRegister();
@Component({
  selector: 'app-legit-script',
  standalone: true,
  templateUrl: './legit-script.component.html',
  styles: ``,
  imports: [
    HeaderComponent,
    FooterComponent,
    OtherBannerFrameComponent,
    ContactFormComponent,
    CommonModule,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class LegitScriptComponent implements AfterViewInit {
  @ViewChild('clientSlider')
  clientSlider: ElementRef<SwiperContainer>;

  ngAfterViewInit(): void {}
  breakpoints = {
    0: {
      slidesPerView: 1,
    },
    940: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3.5,
    },
  };
  centeredSlides: true;

  prevSlide() {
    this.clientSlider?.nativeElement?.swiper?.slidePrev();
  }
  nextSlide() {
    this.clientSlider?.nativeElement?.swiper?.slideNext();
  }
}
