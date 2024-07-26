import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Locations } from '@app/constants/locations 1';
import { phoneNumberValidator } from '@app/constants/phoneValidator';
import { ContactService } from '@app/services/contact.service';
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

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    //Get state
    this.states = this.locations.filter(
      (item: any) => item?.type.toLowerCase() == 'state'
    );

    //Form Handle
    this.bookingForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      phone_number: [
        '',
        [Validators.required, Validators.minLength(10), phoneNumberValidator],
      ],
      company: [''],
      product: [''],
      city_id: [''],
      state_id: [''],
      notes: ['', [Validators.required]],
    });
  }

  get f() {
    return this.bookingForm.controls;
  }

  onSubmit() {
    if (this.bookingForm.invalid) return;
    this.contactService.createBooking(this.bookingForm.value).subscribe({
      next: (res) => {
        Swal.fire({
          customClass: {
            confirmButton: 'btn-cta ',
          },
          imageUrl: 'images/thumbs-up.svg',

          html: `  
          <div >
            <h3 class="fs-43 fw-normal text-dark mt-20">Thank You</h3>
            <p class="fs-28 fw-medium text-gray  mb-0">Your details has been successfully submitted. Thanks!</p>
            <div>
              <div class= "frame-top-left">
              <img src="images/thumbs-up.svg" />
              </div>
            </div>
          </div> `,
          confirmButtonText: 'Okay',
        });
      },
      error: (error) => {
        Swal.fire({
          customClass: {
            confirmButton: 'btn-cta ',
          },
          imageUrl: 'images/error.svg',

          html: '  <p class="fs-28 fw-medium text-gray mb-0 mt-20">There is some error to submit your data</p> ',
          text: error,
          confirmButtonText: 'Okay',
        });
      },
    });
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
}
