import auth0 from 'auth0-js';

export default class Auth {
  auth0 = new auth0.WebAuth({
    domain: 'alexcota.auth0.com',
    clientID: 'IzwHHZY4GNWQygrLmu2SNl6Ye0zAvQiT',
    redirectUri: 'http://localhost:3000/callback',
    audience: 'https://alexcota.auth0.com/userinfo',
    responseType: 'token id_token',
    scope: 'openid'
  });

  login() {
    this.auth0.authorize();
  }
}