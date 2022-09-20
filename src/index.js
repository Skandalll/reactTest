import React from 'react';
import ReactDOM from 'react-dom/client';
import './scss/index.scss';
import App from './App';
import Cart from "./modules/Cart";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <React.StrictMode>
      <Cart></Cart>
    <App />
  </React.StrictMode>
);
