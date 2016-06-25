import * as actionTypes from '../constants/actionTypes';

export function login(data) {
  return {
    type: 'LOGIN',
    data,
  };
}

export function logoff(data) {
  return {
    type: 'LOGOFF',
    data,
  };
}
