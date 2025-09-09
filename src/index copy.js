import React from 'react';
import ReactDOM from 'react-dom/client';
import WrapComponent from './component/WrapComponent';
import { BrowserRouter } from 'react-router-dom';

import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit';
import modal from './store/modal';

const store = configureStore({
  reducer : {
    modal
  }
}); 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Provider  store={store}>
      <WrapComponent />
    </Provider>
  </BrowserRouter>
);