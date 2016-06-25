import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import user from './user';
import xp from './xp';
import upload from './upload';
import progress from './progress';

export default combineReducers({
//  sample,
  user,
  xp,
  upload,
  progress,
  routing: routerReducer,
  // provide store with route state when navigate from page to page
});


// allows for multiple reducers that can return substates
