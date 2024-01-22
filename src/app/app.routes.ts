import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.module').then(LandingModule => LandingModule),
  },
  {
    path: 'imprint',
    loadComponent: () => import('./pages/imprint/imprint.component').then(ImprintComponent => ImprintComponent),
  },
  {
    path: 'privacy',
    loadComponent: () => import('./pages/privacy/privacy.component').then(PrivacyComponent => PrivacyComponent),
  },
];
