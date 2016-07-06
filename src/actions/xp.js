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

export function clearXP(data) {
  return {
    type: actionTypes.XP_CLEAR,
    data,
  };
}

