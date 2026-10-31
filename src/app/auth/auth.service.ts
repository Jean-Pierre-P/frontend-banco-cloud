import { Injectable } from '@angular/core';
import { AUTH_CONFIG } from './auth.config';

const K_VERIFIER = 'pkce_verifier';
const K_STATE = 'pkce_state';
const K_ACCESS = 'access_token';
const K_EXP = 'token_exp';

function base64Url(bytes: Uint8Array): string {
  let s = '';
  bytes.forEach((b) => (s += String.fromCharCode(b)));
  return btoa(s).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
}

function randomString(len: number): string {
  const arr = new Uint8Array(len);
  crypto.getRandomValues(arr);
  return base64Url(arr);
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  get accessToken(): string | null {
    const exp = Number(sessionStorage.getItem(K_EXP) ?? 0);
    if (!exp || Date.now() >= exp) {
      return null;
    }
    return sessionStorage.getItem(K_ACCESS);
  }

  isLoggedIn(): boolean {
    return this.accessToken !== null;
  }

  get groups(): string[] {
    const token = this.accessToken;
    if (!token) {
      return [];
    }
    try {
      let payload = token.split('.')[1].replace(/-/g, '+').replace(/_/g, '/');
      while (payload.length % 4) {
        payload += '=';
      }
      const claims = JSON.parse(atob(payload));
      const g = claims['cognito:groups'];
      return Array.isArray(g) ? g : [];
    } catch {
      return [];
    }
  }

  isAdmin(): boolean {
    return this.groups.includes('ADMIN');
  }

  isUser(): boolean {
    return this.groups.includes('USER');
  }

  /** Redirige a la página de login de Cognito. */
  async login(): Promise<void> {
    const verifier = randomString(64);
    const state = randomString(16);
    const digest = await crypto.subtle.digest('SHA-256', new TextEncoder().encode(verifier));
    const challenge = base64Url(new Uint8Array(digest));

    sessionStorage.setItem(K_VERIFIER, verifier);
    sessionStorage.setItem(K_STATE, state);

    const params = new URLSearchParams({
      response_type: 'code',
      client_id: AUTH_CONFIG.clientId,
      redirect_uri: AUTH_CONFIG.redirectUri,
      scope: AUTH_CONFIG.scope,
      state,
      code_challenge: challenge,
      code_challenge_method: 'S256',
    });
    window.location.href = `${AUTH_CONFIG.domain}/oauth2/authorize?${params.toString()}`;
  }

  /** Se ejecuta al iniciar la app: si volvimos de Cognito con ?code=, lo canjea por tokens. */
  async handleRedirect(): Promise<void> {
    const params = new URLSearchParams(window.location.search);
    const code = params.get('code');
    if (!code) {
      return;
    }
    const verifier = sessionStorage.getItem(K_VERIFIER);
    const expectedState = sessionStorage.getItem(K_STATE);

    try {
      if (!verifier || params.get('state') !== expectedState) {
        throw new Error('Estado de login inválido');
      }
      const body = new URLSearchParams({
        grant_type: 'authorization_code',
        client_id: AUTH_CONFIG.clientId,
        code,
        redirect_uri: AUTH_CONFIG.redirectUri,
        code_verifier: verifier,
      });
      const res = await fetch(`${AUTH_CONFIG.domain}/oauth2/token`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      });
      if (!res.ok) {
        throw new Error('No se pudo obtener el token');
      }
      const data = await res.json();
      sessionStorage.setItem(K_ACCESS, data.access_token);
      sessionStorage.setItem(K_EXP, String(Date.now() + data.expires_in * 1000));
    } catch (e) {
      console.error('Error en el login con Cognito', e);
    } finally {
      sessionStorage.removeItem(K_VERIFIER);
      sessionStorage.removeItem(K_STATE);
      window.history.replaceState({}, '', window.location.pathname);
    }
  }

  logout(): void {
    sessionStorage.removeItem(K_ACCESS);
    sessionStorage.removeItem(K_EXP);
    const params = new URLSearchParams({
      client_id: AUTH_CONFIG.clientId,
      logout_uri: AUTH_CONFIG.logoutUri,
    });
    window.location.href = `${AUTH_CONFIG.domain}/logout?${params.toString()}`;
  }
}