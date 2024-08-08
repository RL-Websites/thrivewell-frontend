import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from '../components/footer/footer.component';
import { HeaderComponent } from '../components/header/header.component';
import { OtherBannerFrameComponent } from '../components/other-banner-frame/other-banner-frame.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [
    HeaderComponent,
    OtherBannerFrameComponent,
    FooterComponent,
    NgbAccordionModule,
    CommonModule,
  ],
  templateUrl: './faq.component.html',
  styles: ``,
})
export class FaqComponent {
  items1 = [
    {
      question:
        '1.	What is your telehealth platform, and what services does it offer?',
      answer1:
        'Our telehealth platform is a comprehensive solution that empowers healthcare providers to deliver virtual care to patients remotely. It offers secure video consultations, messaging, electronic health records integration, and more.',
    },
    {
      question: '2.	How secure is your telehealth platform?',
      answer1:
        'Patient data security is our top priority. Our platform employs advanced encryption, firewall protection, and regular security audits to safeguard sensitive information. We adhere to strict HIPAA compliance standards.',
    },
    {
      question: '3.	Is your telehealth platform HIPAA compliant?',
      answer1:
        'Yes, our platform is fully HIPAA compliant, ensuring the protection and privacy of patient health information.',
    },
    {
      question: '4.	What devices are compatible with your platform?',
      answer1:
        'Our platform is designed to be user-friendly and accessible across various devices, including desktops, laptops, tablets, and smartphones.',
    },
    {
      question:
        '5.	How easy is it for patients and providers to use the platform?',
      answer1:
        'Our platform boasts an intuitive interface, making it easy for both patients and providers to navigate. We provide comprehensive training and support to ensure a smooth onboarding process.',
    },
    {
      question: '6.	What kind of support do you offer?',
      answer1:
        'We offer a robust support system, including 24/7 technical assistance, dedicated customer support, and ongoing training resources.',
    },
    {
      question: '7.	What is the cost of your telehealth platform?',
      answer1:
        'Our pricing is flexible and tailored to meet the specific needs of healthcare providers. We offer various packages to accommodate different practice sizes and budgets.',
    },
    {
      question:
        '8.	How long does it take to implement your telehealth platform?',
      answer1:
        'The implementation timeline varies depending on the complexity of your practice. However, we strive to minimize disruption and get you up and running as quickly as possible.',
    },
    {
      question: '9.	Can I customize the platform to fit my specific needs?',
      answer1:
        "Yes, our platform is highly customizable to align with your practice's unique workflows and preferences. We offer a variety of configuration options and can accommodate custom integrations.",
    },
    {
      question:
        '10.	What is the typical ROI for implementing your telehealth platform?',
      answer1:
        'The ROI can vary based on factors such as practice size, patient demographics, and service offerings. However, many healthcare providers report increased patient satisfaction, improved efficiency, and cost savings through telehealth.',
    },
  ];

  items2 = [
    {
      question: '11.	Does your platform support video, audio, and chat?',
      answer1:
        'Yes, our platform offers secure video, audio, and chat functionalities for seamless communication between patients and providers.',
    },
    {
      question: '12. Can patients and providers share documents and images?',
      answer1:
        'Absolutely, our platform enables secure sharing of documents, images, and other relevant medical information.',
    },
    {
      question:
        '13. Does your platform offer electronic health records (EHR) integration?',
      answer1:
        'Yes, we integrate with leading EHR systems to streamline patient data management and improve workflow efficiency.',
    },
    {
      question:
        '14. Does your platform support patient scheduling and reminders?',
      answer1:
        'Our platform includes robust scheduling features, allowing patients to book appointments online and receive automated reminders.',
    },
    {
      question:
        '15. Can patients access their medical records through the platform?',
      answer1:
        'Patients can securely access and view their medical records within the platform, promoting patient engagement and self-care.',
    },
  ];

  items3 = [
    {
      question:
        '16.	Do you offer shipping fulfillment services for medical supplies?',
      answer1:
        'Yes, we provide comprehensive shipping and fulfillment services for a wide range of medical supplies.',
    },
    {
      question: '17. How does shipping fulfillment work?',
      answer1:
        'Our streamlined process involves receiving and storing your medical supplies, processing orders, and shipping directly to patients.',
    },
    {
      question: '18. What types of medical supplies can you ship?',
      answer1:
        'We can handle a variety of medical supplies, including prescription medications, over-the-counter products, and medical equipment.',
    },
    {
      question: '19. What is the cost of shipping fulfillment services?',
      answer1:
        'Our shipping fulfillment pricing is competitive and based on factors such as order volume, shipping distance, and product type.',
    },
    {
      question:
        '20. How do you ensure the secure and timely delivery of medical supplies?',
      answer1:
        'We prioritize the secure handling and timely delivery of medical supplies. Our process includes tracking, verification, and compliance with shipping regulations.',
    },
  ];
}
