import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-benefit-card',
  standalone: true,
  imports: [],
  templateUrl: './benefit-card.component.html',
  styles: ``,
})
export class BenefitCardComponent {
  @Input() title = '';
  @Input() iconSvg = '';
}
