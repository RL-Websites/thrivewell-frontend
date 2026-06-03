import { Component } from '@angular/core';
import  {ImageWithFallbackComponent} from '../shared/image-with-fallback.component';
import { BenefitCardComponent } from '../benefit-card/benefit-card.component';
import { FeatureCardComponent } from '../feature-card/feature-card.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "../../header/header.component";

@Component({
  selector: 'app-flow-section',
  standalone: true,
  imports: [
    ImageWithFallbackComponent,
    BenefitCardComponent,
    FeatureCardComponent,
    CommonModule,
    HeaderComponent,
  ],
  templateUrl: './flow-section.component.html',
  styles: ``,
})
export class FlowSectionComponent {
  featureCards = [
    {
      title: 'Automated Prescription Processing',
      introText: 'Receive and process prescriptions instantly —',
      bulletPoints: [
        'No delays, no manual entry',
        'Structured intake from clinics',
        'Clean prescription formatting',
        'Reduced processing errors',
      ],
      imageUrl: '/images/flowrx/medicine-store.jpg',
      iconSvg: `<i class="icon-tick me-0"></i>`,
    },
    {
      title: 'End-to-End Fulfillment Tracking',
      introText: 'Track every order in real-time —',
      bulletPoints: [
        'From submission to delivery',
        'Live order status',
        'Fulfillment visibility',
        'Delivery tracking',
      ],
      imageUrl: '/images/flowrx/gift.jpg',
      iconSvg: `<i class="icon-star-thrivewell"></i>`,
    },
    {
      title: 'Refill & Workflow Automation',
      introText: 'Put recurring processes on autopilot:',
      bulletPoints: [
        'Automated refill workflows',
        'Status updates without manual follow-up',
        'Reduced phone/email dependency',
      ],
      imageUrl: '/images/flowrx/laptop.jpg',
      iconSvg: `<i class="icon-top"></i>`,
    },
    {
      title: 'Seamless API Integration',
      introText: 'Flow connects directly with your systems:',
      bulletPoints: [
        'Pharmacy systems',
        'Payment infrastructure',
        'External platforms',
        'Everything works together — no silos',
      ],
      imageUrl: '/images/flowrx/bitcoin.jpg',
      iconSvg: `<i class="icon-locate"></i>`,
    },
    {
      title: 'On-Demand Reporting & Insights',
      introText: 'Make better decisions with real-time data:',
      bulletPoints: [
        'Order volume tracking',
        'Performance analytics',
        'Fulfillment metrics',
      ],
      imageUrl: '/images/flowrx/stock-market.jpg',
      iconSvg: `<i class="icon-box-tick"></i>`,
    },
    {
      title: 'Secure, Cloud-Based System',
      introText: '',
      bulletPoints: [
        'Fully cloud-hosted',
        'Accessible anytime, anywhere',
        'Built with healthcare-grade security standards',
      ],
      imageUrl: '/images/flowrx/lock.jpg',
      iconSvg: `<i class="icon-home"></i>`,
    },
  ];

  benefitCards = [
    { title: 'Process prescriptions faster' },
    { title: 'Reduce operational workload' },
    { title: 'Increase fulfillment volume' },
    { title: 'Automate repetitive tasks' },
    { title: 'Gain full visibility into operations' },
  ];

  // `benefit-card` inserts `iconSvg` with [innerHTML].
  // Provide an HTML snippet so it renders correctly when a URL is used.
  shieldIconSvg = `<img src="/images/flowrx/shield.svg" alt="Shield" class="flow__shield-icon" />`;

  valuePropPoints = [
    'No more back-and-forth communication',
    'No more manual tracking',
    'No more workflow bottlenecks',
    'Just streamlined, automated fulfillment from start to finish',
  ];

  designedForItems = [
    'Compounding pharmacies',
    'Telehealth pharmacy partners',
    'High-volume fulfillment environments',
  ];

  checkIconSvg(color = '#275dad') {
    return `<svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" fill="${color}" opacity="0.2"/><path d="M8 12L11 15L16 9" stroke="${color}" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg>`;
  }
}
