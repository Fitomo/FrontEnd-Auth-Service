import * as actionTypes from '../constants/actionTypes';

export function getTopUsers(topUsers) {
  return {
    type: actionTypes.GET_TOP_USERS_SUCCESS,
    topUsers,
  };
}

export function getTopUsersFail(error) {
  return {
    type: actionTypes.GET_TOP_USERS_FAILURE,
    error,
  };
}
