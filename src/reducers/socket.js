import * as actionTypes from '../constants/actionTypes';

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
