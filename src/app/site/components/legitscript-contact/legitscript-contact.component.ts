import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContactService } from '@app/services/contact.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'legitscript-contact',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './legitscript-contact.component.html',
  styles: ``,
})
export class LegitscriptContactComponent implements OnInit {
  legitScriptContactForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private contactService: ContactService
  ) {}

  ngOnInit(): void {
    this.legitScriptContactForm = this.fb.group({
      first_name: ['', [Validators.required]],
      last_name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      country_id: ['1'],
      phone_number: ['', [Validators.required, Validators.minLength(10)]],
      company: ['', [Validators.required]],
      message: ['', [Validators.required, Validators.minLength(100)]],
    });
  }
  get f() {
    return this.legitScriptContactForm.controls;
  }

  onSubmit() {
    if (this.legitScriptContactForm.invalid) return;
    this.contactService
      .createLegitScriptContact(this.legitScriptContactForm.value)
      .subscribe({
        next: (res) => {
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

          this.legitScriptContactForm.reset();
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
