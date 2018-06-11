import materializeCSS from 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';


import App from './components/App';
import reducers from './reducers';
//development only axios helpers
import axios from 'axios';
window.axios = axios;

/* Create new instance of redux store
 * params are reducers, server-side redering (state), middleware
 */
const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

// render app component
ReactDOM.render(
  <Provider store={store}><App /></Provider>,
  document.querySelector('#root')
);
