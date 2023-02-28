import { AuthConfig } from "angular-oauth2-oidc";

export const authCodeFlowConfig: AuthConfig = {
    //URL of the Identity Provider
    issuer: 'http://localhost:8080/auth/realms/linear',

    // URL of the SPA to redirect the user after the login
    redirectUri: "http://localhost:4200",

    // The SPA (Single Page Authentication) id
    // clientId: 'server.code'
    clientId: 'sso-linear',

    // Only if your auth server needs a secret
    responseType: 'code',

    // Set the scope for the permissions the client
    // token have all of these informations
    scope: 'openid profile email offline_access',

    // Only for development
    showDebugInformation: true,

    // Always keep it false, because if your certificate is invalid
    // your Login Page not been worked
    requireHttps: false
}