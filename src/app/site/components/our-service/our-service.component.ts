import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-our-service',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './our-service.component.html',
  styles: ``
})
export class OurServiceComponent {
  services = [
    {
      title: 'Provider Network & Medical Review',
      image: 'images/our-service/card-1.png',
    },
    {
      title: 'White-Label Telehealth Platform',
      image: 'images/our-service/card-2.png',
    },
    {
      title: 'Pharmacy Fulfillment Network',
      image: 'images/our-service/card-3.png',
    },
    {
      title: 'Compliance & Credentialing Support',
      image: 'images/our-service/card-4.png',
    },
    {
      title: 'Patient Support Operations',
      image: 'images/our-service/card-5.png',
    },
    {
      title: 'Ecommerce Telehealth Experience',
      image: 'images/our-service/card-6.png',
    },
  ];

  benefits = [
    'Patient intake and onboarding',
    'Secure payment processing',
    'Pharmacy fulfillment and shipping',
    'Provider review and prescription workflows',
    'Partner and patient support',
    'White-label branding and technology',
    'Reporting and operational visibility',
  ];

  cardDetails = [
    'Professional Branding',
    'Easy Onboarding',
    'Quick Doctor Visit',
    'Seamless Payments',
    'Flexible Promotions',
    'Secure Transactions',
    'Fast Verification',
  ];

}
