import * as actionTypes from '../constants/actionTypes';

export default function (state = '', action) {
  switch (action.type) {
  case actionTypes.SET_TEXT:
    return action.data;
  default:
    return state;
  }
}
