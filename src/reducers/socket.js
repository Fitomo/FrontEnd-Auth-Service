import * as actionTypes from '../constants/actionTypes';

import * as test from '../index';
import { loadState, saveState } from '../localStorage.js';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
  case actionTypes.SOCKET_MESSAGE:
    return Object.assign({}, { message: action.data });
  case actionTypes.SOCKET_ADD_ONLINE:
    return action.data;
  case actionTypes.SOCKET_DISCONNECT:
    return action.data;
  case '@@router/LOCATION_CHANGE':
    console.log('ROUTE CHANGE', state);
    // return loadState();
    return state;
  default:
    return state;
  }
}
