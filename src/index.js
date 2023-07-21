import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { AppProvider } from './context/context';
import { Auth0Provider } from '@auth0/auth0-react';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Auth0Provider
          domain="dev-nmztsluiw4eijnzn.us.auth0.com"
          clientId="50kfzLtoN8faYYzjZFqWRAVs7XzoixnJ"
          redirect_uri={window.location.origin}
          cacheLocation='localstorage'
    >
      <AppProvider>
        <App />
      </AppProvider>    
    </Auth0Provider>
  </React.StrictMode>
);

