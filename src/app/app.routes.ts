import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { SpecialitesComponent } from './pages/specialites/specialites.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', loadComponent: () => import('./pages/menu/menu.component').then(m => m.MenuComponent) },
  { path: 'specialites', loadComponent: () => import('./pages/specialites/specialites.component').then(m => m.SpecialitesComponent) },
  { path: 'contact', loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent) },
  { path: '**', redirectTo: '' }
];
