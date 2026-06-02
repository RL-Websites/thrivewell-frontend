import { Component } from '@angular/core';
import { FlowComponent } from '../flow/flow.component';

@Component({
  selector: 'app-simple-steps',
  standalone: true,
  imports: [FlowComponent],
  templateUrl: './simple-steps.component.html',
  styles: ``,
})
export class SimpleStepsComponent {}
