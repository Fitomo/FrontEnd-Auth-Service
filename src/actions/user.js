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
// export function submitXPtoUser(xpdata) {
//   return {
//     type: actionTypes.SET_USER_XP,
//     xpdata,
//   };
// }
