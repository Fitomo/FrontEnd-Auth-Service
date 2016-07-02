import * as actionTypes from '../constants/actionTypes';

const initialState = 'false';

export default function (state = initialState, action) {
  switch (action.type) {
  case actionTypes.LOGIN:
    localStorage.auth = 'true';
    return 'true';
  case actionTypes.LOGOUT:
    localStorage.auth = 'false';
    return 'false';
  default:
    return state;
  }
}
