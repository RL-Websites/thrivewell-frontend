import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-healthcare-operations',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './healthcare-operations.component.html',
  styles: ``,
})
export class HealthcareOperationsComponent {
  operations = [
    {
      icon: 'icon-chat',
      title: 'Patient Support Guidance',
    },
    {
      icon: 'icon-form',
      title: 'Intake And Order Status Assistance',
    },
    {
      icon: 'icon-people',
      title: 'Partner Question Handling',
    },
    {
      icon: 'icon-recycle',
      title: 'Refill And Renewal Workflow Support',
    },
    {
      icon: 'icon-chart',
      title: 'Internal Reporting Assistance',
    },
    {
      icon: 'icon-refill',
      title: 'Operational Task Routing',
    },
  ];
}
