import * as actionTypes from '../constants/actionTypes';

export function getTopUsers(topUsers) {
  return {
    type: actionTypes.GET_TOP_USERS_PROCESS,
    topUsers,
  };
}