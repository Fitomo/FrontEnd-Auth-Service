import * as actionTypes from '../constants/actionTypes';

const initialState = 'false';

export default function (state = initialState, action) {
  switch (action.type) {
  case 'LOGIN':
    return 'true';
  // case '@@router/LOCATION_CHANGE':
  //   return ;
  case 'LOGOFF':
    return 'false';
  default:
    return state;
  }
}
