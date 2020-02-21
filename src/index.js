import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, compose} from 'redux'
import {Provider} from 'react-redux'
import App from './App'

import manageUsers from './reducers/manageUsers'


// add imports and code
//createStore takes in one reducer
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(manageUsers, composeEnhancers())

ReactDOM.render(
  // add imports and code
  <Provider store={store}>
      <App />
  </Provider>

  // add imports and code
  ,
  document.getElementById('root')
);
