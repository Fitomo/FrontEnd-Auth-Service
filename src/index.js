import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import routes from './routes';

// Creating the redux store
const store = configureStore();

// Here we are dispatching an action
// store.dispatch(actions.sampleAction(tracks));

const history = syncHistoryWithStore(browserHistory, store);

// the Provider makes store and all functionalities available in all child components
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>,
  document.getElementById('root')
);
