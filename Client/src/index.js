import React from 'react';
import ReactDOM from 'react-dom';
import './Styles/index.css';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from './Redux/store';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
ReactDOM.render(
  <Provider store={store}>
  <Router >
  <PersistGate persistor={persistor}>
    <App/>
    </PersistGate>
  </Router>
  </Provider>
  ,document.getElementById('root')
);
serviceWorker.register();
