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

// RootState, AppDispatch 타입 export
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter 
    basename={process.env.PUBLIC_URL}
    future={{ v7_relativeSplatPath: true, v7_startTransition: true }}
  >
    <Provider  store={store}>
      <WrapComponent />
    </Provider>
  </BrowserRouter>
);