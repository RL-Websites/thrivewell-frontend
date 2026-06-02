import { Component } from '@angular/core';
import { ProductFlowReferenceHeaderComponent } from './product-flow-reference-header.component';

/**
 * Shell /product/flow: header + main; la franja contacto + SiteFooter viven en la página (banda navy).
 */
@Component({
  selector: 'app-product-flow-layout',
  standalone: true,
  imports: [ProductFlowReferenceHeaderComponent],
  templateUrl: './product-flow-layout.component.html',
  styleUrl: './product-flow-layout.component.scss',
})
export class ProductFlowLayoutComponent {}
