import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import configureStore from './stores/configureStore';
import * as actions from './actions';
import App from './components/App/app';
//import Sample from './components/Sample/sampleIndex';
import Profile from './components/Profile/profileIndex';
import Upgrade from './components/Upgrade/upgradeIndex';

// const tracks = [
//   {
//     title: 'Some track',
//   },
//   {
//     title: 'Some other track',
//   },
// ];

// Creating the redux store
const store = configureStore();

fetch('/api/user')
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    store.dispatch(actions.setUser(json));
  });

// Here we are dispatching an action
//store.dispatch(actions.sampleAction(tracks));

const history = syncHistoryWithStore(browserHistory, store);

// the Provider makes store and all functionalities available in all child components

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Profile} />
        <Route path="/" component={Profile} />
        <Route path="/upgrade" component={Upgrade} />
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
);
