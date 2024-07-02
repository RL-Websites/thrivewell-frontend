import { Routes } from '@angular/router';
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
    ],
  },
];
