import { AuthConfig } from "angular-oauth2-oidc";

export const authCodeFlowConfig: AuthConfig = {
    //URL of the Identity Provider
    issuer: 'http://localhost:28080',

    // URL of the SPA to redirect the user after the login
    redirectUri: window.location.origin + '/index.html',

    // The SPA (Single Page Authentication) id
    // clientId: 'server.code'
    clientId: 'sso-linear',

    // Only if your auth server needs a secret
    responseType: 'code',

    // Set the scope for the permissions the client
    // token have all of these informations
    scope: 'openid profile email api',

    // Only for development
    showDebugInformation: true
}