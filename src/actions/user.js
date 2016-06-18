import * as actionTypes from '../constants/actionTypes';

// tracks is an array of objects

export function setUser(userdata) {
  return {
    type: actionTypes.USER_SET,
    userdata,
  };
}

// return an object with action type and payload
