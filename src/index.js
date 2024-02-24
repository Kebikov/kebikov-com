import './scss/index.scss';
import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './app/App';
//import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const rootNode = document.getElementById('root');

const root = createRoot(rootNode);

root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

//serviceWorkerRegistration.register();

