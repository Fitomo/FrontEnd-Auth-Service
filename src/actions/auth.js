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


export const SHOW_LOCK = 'SHOW_LOCK';
export const LOCK_SUCCESS = 'LOCK_SUCCESS';
export const LOCK_ERROR = 'LOCK_ERROR';

function showLock() {
  return {
    type: SHOW_LOCK,
  };
}

function lockSuccess(profile, token) {
  return {
    type: LOCK_SUCCESS,
    profile,
    token,
  };
}

function lockError(err) {
  return {
    type: LOCK_ERROR,
    err,
  };
}

// export function loginAuth0() {
//   const lock = new Auth0Lock('0iFcu4hreRGO3QcxdKOlK9EgUB5xUpzn', 'benroars.auth0.com');
//   return dispatch => {
//     lock.show((err, profile, token) => {
//       if (err) {
//         dispatch(lockError(err));
//         return;
//       }
//       localStorage.setItem('profile', JSON.stringify(profile));
//       localStorage.setItem('id_token', token);
//       dispatch(lockSuccess(profile, token));
//     });
//   };
// }
