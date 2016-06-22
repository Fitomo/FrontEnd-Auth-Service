import * as actionTypes from '../constants/actionTypes';

export function addXP(data) {
  return {
    type: actionTypes.XP_ADD,
    data,
  };
}

export function subtractXP(data) {
  return {
    type: actionTypes.XP_SUBTRACT,
    data,
  };
}


// return an object with action type and payload
