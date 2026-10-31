import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';

export const authGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  if (auth.isLoggedIn()) {
    return true;
  }
  auth.login();
  return false;
};

export const userGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  if (!auth.isLoggedIn()) {
    auth.login();
    return false;
  }
  return auth.isUser() ? true : inject(Router).parseUrl('/dashboard');
};

export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  if (!auth.isLoggedIn()) {
    auth.login();
    return false;
  }
  return auth.isAdmin() ? true : inject(Router).parseUrl('/dashboard');
};