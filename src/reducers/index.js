import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import sample from './sample';

export default combineReducers({
  sample,
  routing: routerReducer,
  // provide store with route state when navigate from page to page
});


// allows for multiple reducers that can return substates
