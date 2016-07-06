import * as actionTypes from '../constants/actionTypes';

export default function (state = [], action) {
  switch (action.type) {
  case actionTypes.SET_LOADED_USER:
    return Object.assign({}, action.data, {
      loaded: true,
    });
  case actionTypes.LOADED_HEALTH_SUBTRACT:
    return Object.assign({}, state, {
      health: state.health - action.data,
    });
  default:
    return state;
  }
}
