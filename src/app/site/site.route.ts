import { Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { BookNowComponent } from './book-now/book-now.component';
import { HomeComponent } from './home/home.component';
import { SiteComponent } from './site.component';

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
    ],
  },
];
