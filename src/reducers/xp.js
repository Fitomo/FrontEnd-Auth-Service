import * as actionTypes from '../constants/actionTypes';

export default function (state = 0, action) {
  // console.log('STATE IN XP', action);
  switch (action.type) {
  case actionTypes.XP_ADD:
    return state + 1;
  case actionTypes.XP_SUBTRACT:
    if (state === 0) {
      return state;
    }
    return state - 1;
  case actionTypes.XP_CLEAR:
    return 0;
  default:
    return state;
  }
}
