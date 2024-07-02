import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./site/site.route').then((m) => m.siteRoutes),
  },

  {
    path: '**',
    redirectTo: '',
  },
];
