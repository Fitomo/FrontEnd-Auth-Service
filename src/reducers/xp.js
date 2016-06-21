import * as actionTypes from '../constants/actionTypes';

// use this for the tap game?

export default function (state = 0, action) {
  console.log('STATE IN XP', action);
  switch (action.type) {
  case actionTypes.XP_ADD:
    return state + 1;
  case actionTypes.XP_SUBTRACT:
    if (state === 0) {
      return state;
    } else {
      return state - 1;
    }
  default:
    return state;
  }
}

