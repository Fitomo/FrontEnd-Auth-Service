import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configureStore } from './stores/configureStore';
import routes from './routes';
import * as actions from './actions';
import { getPictures } from './actions/index';

import { loadState, saveState } from './localStorage.js';

import $ from 'jquery';

//import injectTapEventPlugin from 'react-tap-event-plugin';
//injectTapEventPlugin();

// Creating the redux store

let store = configureStore();

store.subscribe(() => {
});

const history = syncHistoryWithStore(browserHistory, store);

// the Provider makes store and all functionalities available in all child components

fetch('/api/user')
.then((response) => {
  // console.log('response', response);
  return response.json();
})
.then((json) => {
  store.dispatch(actions.setUser(json));
  // later require userId (must be integer) for grabbing particular user images
  // 15 is the default value
  store.dispatch(getPictures(15));
// the Provider makes store and all functionalities available in all child components
  store.dispatch({ type: 'server/addUserOnline', data: json });
  store.dispatch(actions.getStats(json));
});

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>,
  document.getElementById('root')
);
