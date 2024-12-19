import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { MenuService } from './core/services/menu.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    MenuService
  ]
};
