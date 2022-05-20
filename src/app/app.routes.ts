import { Routes } from '@angular/router';

export const AppRoutes: Routes = [
  {
    path: 'things',
    loadChildren: () =>
      import('./dcd/app-dcd.module').then(
        mod => mod.AppDCDModule
      )
  },
  {
    path: '',
    loadChildren: () =>
      import('./public-doc/public-doc.module').then(
        mod => mod.PublicDocModule
      )
  },
  {
    path: '**',
    redirectTo: ''
  }
];
