import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Locations } from '@app/constants/locations 1';

@Component({
  selector: 'contact-form',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './contact-form.component.html',
  styles: ``,
})
export class ContactFormComponent implements OnInit {
  locations: any[] = [...Locations];
  states: any;
  bookingForm: FormGroup;

  constructor(private fb: FormBuilder) {}

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
      notes: [''],
    });
  }
}
