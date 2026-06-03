import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-with-fallback',
  standalone: true,
  imports: [CommonModule],
  template: `
    <img
      [src]="currentSrc"
      [alt]="alt"
      [class]="className"
      (error)="onError()"
    />
  `
})
export class ImageWithFallbackComponent {
  @Input() src = '';
  @Input() alt = '';
  @Input() className = '';

  currentSrc = '';
  hasError = false;

  ngOnInit() {
    this.currentSrc = this.src;
  }

  onError() {
    if (!this.hasError) {
      this.hasError = true;
      this.currentSrc = 'https://placehold.co/600x400?text=Image+Not+Found';
    }
  }
}
