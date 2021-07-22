import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import 'bootstrap/dist/css/bootstrap.min.css';
import { reducers } from './reducers';
import App from './App';
import './index.css';

const store = createStore(reducers, compose(applyMiddleware(thunk)));

if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
  // development URL
  axios.defaults.baseURL = `${process.env.REACT_APP_API_SERVER_DEVELOPMENT}/api/v1`;
} else {
  // production URL
  axios.defaults.baseURL = `${process.env.REACT_APP_API_SERVER_PRODUCTION}/api/v1`;
}

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root'),
);
