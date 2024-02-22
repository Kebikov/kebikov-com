import './scss/index.scss';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './app/App';
//import * as serviceWorkerRegistration from './serviceWorkerRegistration';

const rootNode = document.getElementById('root');
const containerNode = document.getElementById('root');


if(containerNode.hasChildNodes()) {
    console.log('Удаляем.');
    const container = document.querySelector('#container');
    if(container) {
        container.remove();
    }
}

const root = ReactDOM.createRoot(rootNode);

root.render(
  //<React.StrictMode>
    <App />
  //</React.StrictMode>
);

//serviceWorkerRegistration.register();

