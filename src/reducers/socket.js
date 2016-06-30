import * as actionTypes from '../constants/actionTypes';
//import * as test from '../index';
//import { loadState, saveState } from '../localStorage.js';

const initialState = {};

export default function (state = initialState, action) {
  switch (action.type) {
  case actionTypes.SOCKET_MESSAGE:
    return Object.assign({}, { message: action.data });
  case actionTypes.SOCKET_ADD_ONLINE:
    return action.data;
  case actionTypes.SOCKET_DISCONNECT:
    return action.data;
  default:
    return state;
  }
}

// let fxn = () => {
//   window.store.dispatch({ type: 'server/updateOnline', data: 'bruh' });
// }
