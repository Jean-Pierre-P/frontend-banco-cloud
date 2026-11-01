const API_GATEWAY_URL = 'https://6p44ayot74.execute-api.us-east-1.amazonaws.com';

export const AUTH_CONFIG = {
  domain: 'https://us-east-1umxxymwhi.auth.us-east-1.amazoncognito.com',
  clientId: '74hrueqo8iln2t8m0em1pfl3cl',
  redirectUri: window.location.origin,
  logoutUri: window.location.origin,
  scope: 'openid email',
  apiUrls: ['/api', API_GATEWAY_URL],
};

// En local se usa el proxy de Angular (npm start); en la nube, API Gateway
export const API_BASE = window.location.hostname === 'localhost' ? '' : API_GATEWAY_URL;