import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookNowComponent } from './book-now/book-now.component';
import { FaqComponent } from './faq/faq.component';
import { HomeComponent } from './home/home.component';
import { RevolutionTelehealthComponent } from './learn-more/revolution-telehealth/revolution-telehealth.component';
import { SimplifyEcommerceComponent } from './learn-more/simplify-ecommerce/simplify-ecommerce.component';
import { TelehealthSuccessPartnerComponent } from './learn-more/telehealth-success-partner/telehealth-success-partner.component';
import { TelehealthVentureComponent } from './learn-more/telehealth-venture/telehealth-venture.component';
import { LegitScriptComponent } from './legit-script/legit-script.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { ProductsComponent } from './products/products.component';
import { SiteComponent } from './site.component';
import { SolutionsComponent } from './solutions/solutions.component';
import { TermsAndConditionsComponent } from './terms-and-conditions/terms-and-conditions.component';

export const siteRoutes: Routes = [
  {
    path: '',
    component: SiteComponent,
    children: [
      {
        path: '',
        component: HomeComponent,
      },
      {
        path: 'book-now',
        component: BookNowComponent,
      },
      {
        path: 'about',
        component: AboutUsComponent,
      },
      {
        path: 'faq',
        component: FaqComponent,
      },
      {
        path: 'legitscript',
        component: LegitScriptComponent,
      },
      {
        path: 'solutions',
        component: SolutionsComponent,
      },
      {
        path: 'products',
        component: ProductsComponent,
      },
      {
        path: 'terms-and-conditions',
        component: TermsAndConditionsComponent,
      },
      {
        path: 'privacy-policy',
        component: PrivacyPolicyComponent,
      },
      {
        path: 'simplify-your-e-commerce-experience',
        component: SimplifyEcommerceComponent,
      },
      {
        path: 'revolutionizing-telehealth-seamless-integration',
        component: RevolutionTelehealthComponent,
      },
      {
        path: 'efficient-fulfillment-for-your-telehealth-venture',
        component: TelehealthVentureComponent,
      },
      {
        path: 'your-telehealth-success-partner',
        component: TelehealthSuccessPartnerComponent,
      },
    ],
  },
];
