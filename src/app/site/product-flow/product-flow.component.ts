import { CommonModule, DOCUMENT } from '@angular/common';
import { Component, Inject, OnDestroy, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { HeaderComponent } from '../components/header/header.component';
import { FooterComponent } from '../components/footer/footer.component';
import { OtherBannerFrameComponent } from '../components/other-banner-frame/other-banner-frame.component';

@Component({
  selector: 'app-product-flow',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    RouterLink,
    HeaderComponent,
    FooterComponent,
    OtherBannerFrameComponent,
  ],
  templateUrl: './product-flow.component.html',
  styleUrl: './product-flow.component.scss',
})
export class ProductFlowComponent implements OnInit, OnDestroy {
  private static readonly bodyClass = 'product-flow-page';

  demoForm = {
    name: '',
    email: '',
    company: '',
    phone: '',
    message: '',
  };

  constructor(@Inject(DOCUMENT) private readonly document: Document) {}

  ngOnInit(): void {
    this.document.body.classList.add(ProductFlowComponent.bodyClass);
    this.document.documentElement.classList.add(ProductFlowComponent.bodyClass);
  }

  ngOnDestroy(): void {
    this.document.body.classList.remove(ProductFlowComponent.bodyClass);
    this.document.documentElement.classList.remove(ProductFlowComponent.bodyClass);
  }

  onDemoSubmit(event: Event): void {
    event.preventDefault();
  }
}
