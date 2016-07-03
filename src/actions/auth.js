import * as actionTypes from '../constants/actionTypes';

export function login(data) {
  return {
    type: actionTypes.LOGIN,
    data,
  };
}

export function logoff(data) {
  return {
    type: actionTypes.LOGOUT,
    data,
  };
}
