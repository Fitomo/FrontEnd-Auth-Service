import * as actionTypes from '../constants/actionTypes';

export default function (state = [], action) {
  const type = action.data;

  switch (action.type) {
  case actionTypes.SET_LOADED_USER:
    return action.data;
  default:
    return state;
  }
}
