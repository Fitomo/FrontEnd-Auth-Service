import * as actionTypes from '../constants/actionTypes';

const initialState = 'false';

export default function (state = initialState, action) {
  switch (action.type) {
  case 'LOGIN':
  window.localStorage.auth = 'true';
    return 'true';
  // case '@@router/LOCATION_CHANGE':
  //   return ;
  case 'LOGOFF':
  window.localStorage.auth = 'false';
    return 'false';
  default:
    return state;
  }
}
