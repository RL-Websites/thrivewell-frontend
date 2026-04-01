import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

/**
 * Migración del header de referencia (thrivewellrx SiteHeader):
 * barra blanca, borde inferior, logo + CTA “GET YOUR DEMO TODAY!” + teléfono.
 */
@Component({
  selector: 'app-product-flow-reference-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './product-flow-reference-header.component.html',
  styleUrl: './product-flow-reference-header.component.scss',
})
export class ProductFlowReferenceHeaderComponent {}
