import { ApplicationConfig, inject, provideAppInitializer, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { routes } from './app.routes';
import { authInterceptor } from './auth/auth.interceptor';
import { AuthService } from './auth/auth.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    // Conecta el frontend con el backend Java y agrega el JWT de Cognito a cada llamada
    provideHttpClient(withInterceptors([authInterceptor])),
    // Al volver del login de Cognito (?code=...), canjea el código por el token
    provideAppInitializer(() => inject(AuthService).handleRedirect()),
  ],
};