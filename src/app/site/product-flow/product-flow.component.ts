import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { OtherBannerFrameComponent } from '../components/other-banner-frame/other-banner-frame.component';
import { ContactService } from '@app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-product-flow',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    OtherBannerFrameComponent,
  ],
  templateUrl: './product-flow.component.html',
  styleUrl: './product-flow.component.scss',
})
export class ProductFlowComponent implements OnInit, OnDestroy {
  private static readonly bodyClass = 'product-flow-page';

  demoForm = {
    name: '',
    email: '',
    company: '',
    message: '',
  };

  constructor(
    @Inject(DOCUMENT) private readonly document: Document,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.document.body.classList.add(ProductFlowComponent.bodyClass);
    this.document.documentElement.classList.add(ProductFlowComponent.bodyClass);
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove(ProductFlowComponent.bodyClass);
    this.document.documentElement.classList.remove(ProductFlowComponent.bodyClass);
  }

  onDemoSubmit(event: Event): void {
    event.preventDefault();

    const payload = {
      first_name: this.demoForm.name,
      last_name: '',
      email: this.demoForm.email,
      phone_number: '',
      company: this.demoForm.company,
      notes: this.demoForm.message,
    };

    this.contactService.createBooking(payload).subscribe({
      next: () => {
        Swal.fire({
          customClass: { confirmButton: 'btn-cta' },
          html: `
            <div class="pt-30 px-30">
              <img src="images/modal/thumbs-up.svg">
              <h3 class="fs-md-43 fs-30 fw-normal text-dark mt-20">Thank You</h3>
              <p class="fs-md-18 fs-16 fw-medium text-gray mb-0">Your details have been successfully submitted.</p>
              <div class="modal-frame">
                <div class="frame-top-left">
                  <img class="position-absolute start-0 top-0" src="images/modal/top-left.svg">
                </div>
                <div class="frame-bottom-right">
                  <img class="position-absolute end-0 bottom-0" src="images/modal/bottom-right.svg">
                </div>
              </div>
            </div>`,
          confirmButtonText: 'Okay',
        });
        this.demoForm = { name: '', email: '', company: '', message: '' };
      },
      error: () => {
        Swal.fire({
          customClass: { confirmButton: 'btn-cta' },
          html: `
            <div class="pt-30 px-30">
              <img src="images/modal/error.svg">
              <h3 class="fs-md-43 fs-30 fw-normal text-dark mt-20">Sorry</h3>
              <p class="fs-md-18 fs-16 fw-medium text-gray mb-0 mt-20">Your details could not be submitted.</p>
              <div class="modal-frame">
                <div class="frame-top-left">
                  <img class="position-absolute start-0 top-0" src="images/modal/top-left.svg">
                </div>
                <div class="frame-bottom-right">
                  <img class="position-absolute end-0 bottom-0" src="images/modal/bottom-right.svg">
                </div>
              </div>
            </div>`,
          confirmButtonText: 'Okay',
        });
      },
    });
  }
}
