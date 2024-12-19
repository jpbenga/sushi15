import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { MenuComponent } from './pages/menu/menu.component';
import { MenuDetailComponent } from './pages/menu/menu-detail/menu-detail.component';
import { MenuItemsComponent } from './pages/menu/menu-items/menu-items.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'menu', component: MenuComponent },
  { path: 'menu/items', component: MenuItemsComponent },
  { path: 'menu/:id', component: MenuDetailComponent },
  { path: '**', redirectTo: '' }
];
