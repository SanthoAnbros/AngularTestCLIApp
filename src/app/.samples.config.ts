export default {
    oidc: {
      clientId: '0oawomjduS56wLAYR356',
      issuer: 'https://dev-849773.okta.com/oauth2/default',
      redirectUri: 'http://localhost:8080/implicit/callback',
      scope: 'openid profile email',
      testing: {
        disableHttpsCheck: false
      }
    }
  };