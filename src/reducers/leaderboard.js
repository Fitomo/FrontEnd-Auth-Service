import * as actionTypes from '../constants/actionTypes';

export default function (state = [], action) {
  switch (action.type) {
  case actionTypes.GET_TOP_USERS:
    return action.topUsers;
  case 'GET_TOP_USERS_REQUEST':
    return 'loading';
  case 'GET_TOP_USERS_SUCCESS':
    return action.payload;
  case 'GET_TOP_USERS_FAILURE':
    return [];
  default:
    return state;
  }
}

