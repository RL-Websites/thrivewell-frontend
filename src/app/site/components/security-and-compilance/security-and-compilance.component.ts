import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-security-and-compilance',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './security-and-compilance.component.html',
  styles: ``,
})
export class SecurityAndComplianceComponent {
  securityItems = [
    {
      icon: 'icon-security1',
      title: 'HIPAA-Conscious Workflows',
    },
    {
      icon: 'icon-layers',
      title: 'Secure Data Handling',
    },
    {
      icon: 'icon-lock1',
      title: 'Role-Based Access Control',
    },
    {
      icon: 'icon-key',
      title: 'Encrypted Systems',
    },
    {
      icon: 'icon-credit-card',
      title: 'PCI-Aware Payment Processes',
    },
    {
      icon: 'icon-document',
      title: 'Clinical Workflow Documentation',
    },
    {
      icon: 'icon-lab',
      title: 'Pharmacy Coordination Processes',
    },
    {
      icon: 'icon-ComplianceIcon',
      title: 'Encrypted Systems',
    },
  ];
}
