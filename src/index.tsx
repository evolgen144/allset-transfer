import React from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';


/* Auth0 */
import { Auth0Provider } from '@auth0/auth0-react';
import GetUser from './components/GetUser';

/* Add own Auth0 env variables */
const domain = null
const clientId = null

const container = document.getElementById('root');
const root = createRoot(container!);

root.render(
  <Auth0Provider
    domain={domain}
    clientId={clientId}
    authorizationParams={{
      redirect_uri: 'http://localhost:8100/UserOnboard'
    }}
  >
    <React.StrictMode>
      <GetUser />
    </React.StrictMode>
  </Auth0Provider>
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
