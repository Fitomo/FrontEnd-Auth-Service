import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import xp from './xp';
import upload from './upload';
import progress from './progress';
import modal from './modal';
import socket from './socket';
import isAuth from './isAuth';
import leaderboard from './leaderboard';
import stats from './getStats';
import loadeduser from './loadeduser';
import battleText from './battleText';

export default combineReducers({
  user,
  xp,
  upload,
  progress,
  modal,
  socket,
  isAuth,
  routing: routerReducer,
  leaderboard,
  stats,
  loadeduser,
  battleText,
  // provide store with route state when navigate from page to page
});


// allows for multiple reducers that can return substates
