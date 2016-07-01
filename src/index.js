import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configureStore, socket } from './stores/configureStore';
import routes from './routes';
import * as actions from './actions';
import * as css from "./style/index.css";

// import { getPictures } from './actions/index';
// import { loadState, saveState } from './localStorage.js';
// import $ from 'jquery';

// import injectTapEventPlugin from 'react-tap-event-plugin';
// injectTapEventPlugin();

// Creating the redux store

let store = configureStore();

store.subscribe(() => {
});

const history = syncHistoryWithStore(browserHistory, store);

// the Provider makes store and all functionalities available in all child components
fetch('http://127.0.0.1:8080/api/user', {
  method: "GET",
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'Cache': 'no-cache',
  },
  credentials: 'include',
})
.then((response) => {
  return response.json();
})
.then((json) => {
  store.dispatch(actions.setUser(json));
  // later require userId (must be integer) for grabbing particular user images
  // 15 is the default value
  store.dispatch(actions.getPictures(15));
  store.dispatch({ type: 'server/addUserOnline', data: json });
}).catch((err) => {
  console.log('ERR', err);
  //localStorage.clear();
});

// the Provider makes store and all functionalities available in all child components
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>,
  document.getElementById('root')
);


