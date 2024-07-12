import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
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
  participantForm: FormGroup;

  ngOnInit(): void {
    this.states = this.locations.filter(
      (item: any) => item?.type.toLowerCase() == 'state'
    );
  }
}
