import * as actionTypes from '../constants/actionTypes';

export function setUser(userdata) {
  return {
    type: actionTypes.USER_SET,
    userdata,
  };
}

export function userAddXP(data) {
  return {
    type: actionTypes.USER_XP_ADD,
    data,
  };
}

export function userSubtractXP(data) {
  return {
    type: actionTypes.USER_XP_SUBTRACT,
    data,
  };
}

export function setLoadedUser(data) {
  return {
    type: actionTypes.SET_LOADED_USER,
    data,
  };
}

export function checkLevel(user) {
  return {
    type: actionTypes.CHECK_LEVEL,
    user,
  };
}

// export function submitXPtoUser(xpdata) {
//   return {
//     type: actionTypes.SET_USER_XP,
//     xpdata,
//   };
// }
