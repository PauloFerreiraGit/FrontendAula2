import { Interfaces } from './pages/interfaces/interfaces';
import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'ebook/interpolacao',
    pathMatch: 'full',
  },
  {
    path: 'ebook/interpolacao',
    loadComponent: () =>
      import('./pages/interpolacao/interpolacao').then((ana) => ana.Interpolacao),
  },

  {path: 'ebook/interface',
    loadComponent: () =>
      import('./pages/interfaces/interfaces').then((ana) => ana.Interfaces),
    
  },
  {
    path: 'ebook/poo',
    loadComponent: () =>
      import('./pages/poo/poo').then((c) => c.Poo),
  },
  {
    path: 'ebook/functions',
    loadComponent: () =>
      import('./pages/functions/functions').then((c) => c.Functions),
  },








  {
    path: '**',
    loadComponent: () => import('./pages/interpolacao/interpolacao').then((c) => c.Interpolacao),
  },
];
