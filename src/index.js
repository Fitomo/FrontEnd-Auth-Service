import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configureStore } from './stores/configureStore';
import routes from './routes';
import * as actions from './actions';
import { getPictures } from './actions/index';

// import { loadState, saveState } from './localStorage.js';

import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

// Creating the redux store
// const persistedState = loadState();
const store = configureStore();
<<<<<<< HEAD
=======

// store.subscribe(() => {
//   saveState(store.getState());
// });

>>>>>>> 83ef09e822d68d3a11b3142e7f051e58dc5a34cc
const history = syncHistoryWithStore(browserHistory, store);

// the Provider makes store and all functionalities available in all child components

fetch('/api/user')
.then((response) => {
<<<<<<< HEAD
  // console.log('response', response);
=======
>>>>>>> 83ef09e822d68d3a11b3142e7f051e58dc5a34cc
  return response.json();
})
.then((json) => {
  store.dispatch(actions.setUser(json));
<<<<<<< HEAD

  // later require userId (must be integer) for grabbing particular user images
  // 15 is the default value
  store.dispatch(getPictures(15));
});


// the Provider makes store and all functionalities available in all child components
=======
  store.dispatch({ type: 'server/addUserOnline', data: json });
});

>>>>>>> 83ef09e822d68d3a11b3142e7f051e58dc5a34cc
ReactDOM.render(
  <Provider store={store}>
    <Router routes={routes} history={history} />
  </Provider>,
  document.getElementById('root')
);


