import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';

import store from '@/store/index';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';

import App from './App';

import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
    <ToastContainer position='top-right' />
  </React.StrictMode>
);

reportWebVitals();
