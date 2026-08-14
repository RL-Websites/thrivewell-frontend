import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { Locations } from '@app/constants/locations 1';
import { normalizeAnalyticsPath } from '@app/helper/helper';
import { AnalyticsService } from '@app/services/analytics.service';
import { ContactService } from '@app/services/contact.service';
import { MetaPixelService } from '@app/services/meta-pixel.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './contact-form.component.html',
  styles: ``,
})
export class ContactFormComponent implements OnInit {
  locations: any[] = [...Locations];
  states: any;
  bookingForm: FormGroup;
  isSubmitting = false;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService,
    private router: Router,
    private analytics: AnalyticsService,
    private metaPixel: MetaPixelService,
  ) {}

  ngOnInit(): void {
    //Get state
    this.states = this.locations.filter(
      (item: any) => item?.type.toLowerCase() == 'state',
    );

    //Form Handle
    this.bookingForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: ['', [Validators.required, Validators.minLength(10)]],
      company: [''],
      product: [''],
      city_id: [''],
      state_id: [''],
      notes: [
        '',
        [
          Validators.required,
          Validators.minLength(1),
          this.noUrlOrDomainValidator(),
        ],
      ],
    });
  }

  get f() {
    return this.bookingForm.controls;
  }

  onSubmit() {
    if (this.bookingForm.invalid || this.isSubmitting) return;

    this.isSubmitting = true;

    this.contactService.createBooking(this.bookingForm.value).subscribe({
      next: (res) => {
        this.trackLead();
        Swal.fire({
          customClass: {
            confirmButton: 'btn-cta ',
          },
          html: `  
          <div class=" pt-30 px-30">
            <img src="images/modal/thumbs-up.svg">
            <h3 class="fs-md-43 fs-30 fw-normal text-dark mt-20">Thank You</h3>
            <p class="fs-md-18 fs-16 fw-medium text-gray  mb-0">Your details has been successfully submitted.</p>
            <div class="modal-frame">
              <div class= "frame-top-left">
                  <img class="position-absolute start-0 top-0"  src ="images/modal/top-left.svg">
              </div>
              <div class= "frame-bottom-right">
                  <img class="position-absolute end-0 bottom-0" src ="images/modal/bottom-right.svg">
              </div>
            </div>
          </div> `,
          confirmButtonText: 'Okay',
        });
        this.bookingForm.reset();
        this.isSubmitting = false;
      },
      error: (error) => {
        Swal.fire({
          customClass: {
            confirmButton: 'btn-cta ',
          },

          html: ` 
          <div class=" pt-30 px-30">
            <img src="images/modal/error.svg">
             <h3 class="fs-md-43 fs-30 fw-normal text-dark mt-20">Sorry</h3>
            <p class="fs-md-18 fs-16 fw-medium text-gray mb-0 mt-20">Your details could not be submitted.</p> 
             <div class="modal-frame">
              <div class= "frame-top-left">
                  <img class="position-absolute start-0 top-0"  src ="images/modal/top-left.svg">
              </div>
              <div class= "frame-bottom-right">
                  <img class="position-absolute end-0 bottom-0" src ="images/modal/bottom-right.svg">
              </div>
            </div>
          </div>
           `,
          text: error,
          confirmButtonText: 'Okay',
        });
        this.isSubmitting = false;
      },
    });
  }

  /**
   * Reports a successful booking to Meta (Lead) and GA (generate_lead).
   * No form field values are sent — only the page the lead came from, so no
   * personal or health information ever leaves the browser via ad tracking.
   * Tracking must never break the submit flow, hence the try/catch.
   */
  private trackLead(): void {
    try {
      const path = normalizeAnalyticsPath(this.router.url);

      this.metaPixel.track('Lead', {
        content_name: path,
        content_category: 'Booking Form',
      });

      this.analytics.event('generate_lead', {
        form: 'booking',
        page_path: path,
      });
    } catch {
      // Ignore — analytics failures must not affect the user.
    }
  }

  restrictInput(event: KeyboardEvent) {
    const inputElement = event.target as HTMLInputElement;
    const currentValue = inputElement.value;
    const inputChar = String.fromCharCode(event.charCode);

    if (!/[0-9]/.test(inputChar)) {
      event.preventDefault();
      return;
    }
    if (currentValue.length >= 10) {
      event.preventDefault();
    }
  }

  private noUrlOrDomainValidator(): ValidatorFn {
    const urlOrDomainPattern =
      /(?:https?:\/\/|www\.|(?:[a-z0-9-]+\.)+[a-z]{2,})(?:[^\s]*)?/i;

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;

      if (!value || typeof value !== 'string') {
        return null;
      }

      return urlOrDomainPattern.test(value) ? { urlOrDomain: true } : null;
    };
  }
}
