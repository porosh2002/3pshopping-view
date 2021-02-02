import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {Provider} from 'react-redux'
import * as serviceWorker from './serviceWorker';
import { BrowserRouter as Router } from "react-router-dom";
import { createStore } from 'redux';
import {userSET} from './reducers'
const store = createStore(userSET)
ReactDOM.render(
  <Router >
    <Provider store={store}>
    <App/>
    </Provider>
  </Router>,document.getElementById('root')
);
serviceWorker.register();
