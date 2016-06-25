import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configureStore } from './stores/configureStore';
import routes from './routes';
import * as actions from './actions';

// import { loadState, saveState } from './localStorage.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Creating the redux store
// const persistedState = loadState();
const store = configureStore();

// store.subscribe(() => {
//   saveState(store.getState());
// });

const history = syncHistoryWithStore(browserHistory, store);

// the Provider makes store and all functionalities available in all child components

fetch('/api/user')
.then((response) => {
  return response.json();
})
.then((json) => {
  store.dispatch(actions.setUser(json));
  store.dispatch({ type: 'server/addUserOnline', data: json });
});

ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>,
  document.getElementById('root')
);


