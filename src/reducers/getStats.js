import * as actionTypes from '../constants/actionTypes';

export default function (state = {}, action) {
  console.log('IN REDUCER', action.stats);
  switch (action.type) {
  case actionTypes.GET_STATS_REQUEST:
    return Object.assign({}, state, {
    });
  case actionTypes.GET_STATS_SUCCESS:
    return action.stats;
  case actionTypes.GET_STATS_FAILURE:
    return Object.assign({}, state, {
    });
  default:
    return state;
  }
}
