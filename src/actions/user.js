import * as actionTypes from '../constants/actionTypes';

// tracks is an array of objects

export function setUser(userdata) {
  return {
    type: actionTypes.USER_SET,
    userdata,
  };
}

export function submitXPtoUser(xpdata) {
  return {
    type: actionTypes.SET_USER_XP,
    xpdata,
  };
}

// return an object with action type and payload
