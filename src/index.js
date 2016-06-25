import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import routes from './routes';
import * as actions from './actions';
import { getPictures } from './actions/index';

// Creating the redux store
const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);

fetch('/api/user')
.then((response) => {
  // console.log('response', response);
  return response.json();
})
.then((json) => {
  console.log('json', json);
  store.dispatch(actions.setUser(json));

  // later require userId (must be integer) for grabbing particular user images
  // 15 is the default value
  store.dispatch(getPictures(15));
});


// the Provider makes store and all functionalities available in all child components
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>,
  document.getElementById('root')
);
