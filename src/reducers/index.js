import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import xp from './xp';
import upload from './upload';
import progress from './progress';
// import progress from './progress';
import modal from './modal';
import socket from './socket';
import isAuth from './isAuth';

export default combineReducers({
  user,
  xp,
  upload,
  progress,
  modal,
  socket,
  isAuth,
  routing: routerReducer,
  // provide store with route state when navigate from page to page
});


// allows for multiple reducers that can return substates
