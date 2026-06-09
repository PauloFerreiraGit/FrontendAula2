import { Variaveis } from './pages/welcome/variaveis/variaveis';
import { Lacos } from './pages/welcome/lacos/lacos';
import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'welcome', pathMatch: 'full' },
  {
    path: 'ebook/welcome',
    loadComponent: () => import('./pages/welcome/welcome').then((ana) => ana.Welcome),
  },
  { path: 'ebook/Lacos', component: Lacos },
  {
    path: 'ebook/Tipo-de-dados',
    loadComponent: () =>
      import('./pages/tipo-de-dados/tipo-de-dados').then((paulo) => paulo.TipoDeDados),
  },
  {
    path: 'ebook/Variaveis',
    loadComponent: () =>
      import('./pages/welcome/variaveis/variaveis').then((Antonio) => Antonio.Variaveis),
  },
  {
    path: 'ebook/operadores',
    loadComponent: () =>
      import('./pages/welcome/operadores/operadores').then((Artur) => Artur.Operadores),
  },
  {
    path: 'ebook/Estrutura-de-controles',
    loadComponent: () =>
      import('./pages/welcome/estrutura-de-controles/estrutura-de-controles').then(
        (Rui) => Rui.EstruturaDeControles,
      ),
  },

  /**ultima rota */
  { path: '**', loadComponent: () => import('./pages/welcome/welcome').then((c) => c.Welcome) },
];
