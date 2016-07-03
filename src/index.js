import React from 'react';
import ReactDOM from 'react-dom';
import { Router, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import { Provider } from 'react-redux';
import { configureStore, socket } from './stores/configureStore';
import routes from './routes';
import * as actions from './actions';

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
// fetch('http://127.0.0.1:8080/api/user')
// .then((response) => {
//   return response.json();
// })
// .then((json) => {
//   store.dispatch(actions.setUser(json));
//   // later require userId (must be integer) for grabbing particular user images
//   // 15 is the default value
//   store.dispatch(actions.getPictures(15));
//   store.dispatch({ type: 'server/addUserOnline', data: json });
// });
const json = {"id":1,"username":null,"name":"anon","health":100,"level":1,"xp":null,"totalXp":0,"distXp":0,"armXp":0,"legXp":0,"abXp":0,"accessToken":"eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiI0UE03WE0iLCJhdWQiOiIyMjdWM00iLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyc2V0IHJhY3QgcndlaSByaHIgcnBybyByc2xlIiwiZXhwIjoxNDY3NDAyNDU3LCJpYXQiOjE0NjczOTg4NTd9.TJzlOvGU_UZHfiEa2pxtiy8rb8811Y-9cKEa8V_bk2w","refreshToken":"6817dde0683f32a60f44cf2dcec97326c7b160704284c78ce00f6327ea65d0ac","device":"Fitbit","fitbit_id":"4PM7XM","jawbone_id":null,"steps":0,"calories":0,"date":"20160701","followers":"[]","following":"[]","created_at":"2016-07-01T18:33:47.000Z","updated_at":"2016-07-01T18:47:37.000Z","currVals":{"armXp":0,"legXp":0,"abXp":0}}

store.dispatch(actions.setUser(json));
// later require userId (must be integer) for grabbing particular user images
// 15 is the default value
store.dispatch(actions.getPictures(15));
store.dispatch({ type: 'server/addUserOnline', data: json });


// fetch('http://127.0.0.1:8080/api/user', {
//   method: "GET",
//   headers: {
//     'Accept': 'application/json',
//     'Content-Type': 'application/json',
//     'Cache': 'no-cache',
//   },
//   credentials: 'include',
// })
// .then((response) => {
//   return response.json();
// })
// .then((json) => {
//   store.dispatch(actions.setUser(json));
//   // later require userId (must be integer) for grabbing particular user images
//   // 15 is the default value
//   store.dispatch(actions.getPictures(15));
//   store.dispatch({ type: 'server/addUserOnline', data: json });
// }).catch((err) => {
//   console.log('ERR', err);
//   //localStorage.clear();
// });

// the Provider makes store and all functionalities available in all child components
ReactDOM.render(
  <Provider store={store}>
    <Router
      routes={routes}
      history={history}
    />
  </Provider>,
  document.getElementById('root')
);
