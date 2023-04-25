import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from 'react-redux';
import {store, persistor} from './store';
import { PersistGate } from 'redux-persist/integration/react'
import { positions, transitions, Provider as AlertProvider } from 'react-alert';
import AlertTemplate from 'react-alert-template-basic';

const options = {
  timeout: 5000,
  position: positions.BOTTOM_CENTER,
  transitions: transitions.SCALE
}


ReactDOM.render(

  <Provider store={store}>
      {/* <PersistGate persistor={persistor}> */}
      <AlertProvider template={AlertTemplate} {...options}>
      <App />
      </AlertProvider>
      {/* </PersistGate> */}
  </Provider>,
  
  document.getElementById('root')
);

