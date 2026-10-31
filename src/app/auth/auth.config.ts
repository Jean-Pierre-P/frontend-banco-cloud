export const AUTH_CONFIG = {
  domain: 'https://us-east-1umxxymwhi.auth.us-east-1.amazoncognito.com',
  clientId: '74hrueqo8iln2t8m0em1pfl3cl',
  redirectUri: 'http://localhost:4200',
  logoutUri: 'http://localhost:4200',
  scope: 'openid email',
  // El token solo se envía a estas APIs
  apiUrls: ['http://localhost:8081', 'http://localhost:8083'],
};