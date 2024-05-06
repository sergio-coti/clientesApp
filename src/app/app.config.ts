import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';

export const appConfig: ApplicationConfig = {
  providers: [

    //Habilitando a biblioteca @angular/router
    provideRouter(routes),
    
    //Habilitando a biblioteca @angular/common/http
    provideHttpClient()
  ]
};
