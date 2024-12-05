import { title } from 'process';
import { BlankLayoutComponent } from './pages/blank-layout/blank-layout.component';
import { Routes } from '@angular/router';

export const routes: Routes = [
  // blank layout
  {
    path: '',
    loadComponent: () =>
      import('./pages/blank-layout/blank-layout.component').then(
        (e) => e.BlankLayoutComponent
      ),
  },
  {
    path: '**',
    loadComponent: () =>
      import('./core/components/not-found/not-found.component').then(
        (e) => e.NotFoundComponent
      ),
  },
];
