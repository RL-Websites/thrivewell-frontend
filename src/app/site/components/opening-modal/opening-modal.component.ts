import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'opening-modal',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './opening-modal.component.html',
  styles: ``,
})
export class OpeningModalComponent implements OnInit {
  isVisible = false;
  isButtonDisabled: boolean = true;

  constructor() {}

  ngOnInit() {
    this.showModal();
  }

  showModal() {
    this.isVisible = true;
    document.body.style.overflow = 'hidden';
  }
  closeModal() {
    this.isVisible = false;
    document.body.style.overflow = 'auto';
    console.log('object');
  }
  enableButton() {
    this.isButtonDisabled = false;
  }
}
