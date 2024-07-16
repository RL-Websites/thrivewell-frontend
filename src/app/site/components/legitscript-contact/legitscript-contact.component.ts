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
      message: ['', Validators.required],
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
