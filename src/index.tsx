import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';

/* Auth0 */
import { Auth0Provider } from '@auth0/auth0-react';
const domain = process.env.REACT_APP_AUTH0_DOMAIN;
const id = process.env.REACT_APP_AUTH0_CLIENT_ID;


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <Auth0Provider
      domain="dev-dgee66u0thfy5ho2.us.auth0.com"
      clientId="VCpD6fxumwLhWCtSRzxMsVispXMQReTQ"
      useRefreshTokens={true}
      useRefreshTokensFallback={false}
      authorizationParams={{ redirect_uri:window.location.origin}}
      // authorizationParams={{redirect_uri:"http://localhost:8100/Hire"}}
    >
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </Auth0Provider>
);

 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
