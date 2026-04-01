import { Component } from '@angular/core';

/**
 * Migración del footer de referencia (thrivewellrx SiteFooter):
 * franja oscura, tipografía pequeña centrada, velo radial suave.
 */
@Component({
  selector: 'app-product-flow-reference-footer',
  standalone: true,
  templateUrl: './product-flow-reference-footer.component.html',
  styleUrl: './product-flow-reference-footer.component.scss',
})
export class ProductFlowReferenceFooterComponent {
  readonly year = new Date().getFullYear();
}
