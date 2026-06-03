import { Component, Input } from '@angular/core';
import { ImageWithFallbackComponent } from '../shared/image-with-fallback.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-feature-card',
  standalone: true,
  imports: [ImageWithFallbackComponent, CommonModule],
  templateUrl: './feature-card.component.html',
  styles: ``,
})
export class FeatureCardComponent {
  @Input() title = '';
  @Input() imageUrl = '';
  @Input() iconSvg = '';
  @Input() bulletPoints: string[] = [];
  @Input() introText = '';
}
