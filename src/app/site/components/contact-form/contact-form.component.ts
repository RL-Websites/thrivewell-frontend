import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { Locations } from '@app/constants/locations 1';
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
      phone_number: ['', [Validators.required, Validators.minLength(10)]],
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
            confirmButton: 'btn-cta',
          },
          html: ' <h3 class="fs-43 fw-normal text-dark">Thank You</h3> <p class="fs-28 fw-medium text-gray">Your details has been successfully submitted. Thanks!</p> ',
          icon: 'success',
          confirmButtonText: 'Okay',
        });
      },
      error: (error) => {
        Swal.fire({
          icon: 'error',
          title: 'There is some error to submit your data',
          text: error,
        });
      },
    });
  }
}
