import * as actionTypes from '../constants/actionTypes';

const initialState = 'false';

export default function (state = initialState, action) {
  switch (action.type) {
  case 'LOGIN':
    localStorage.auth = 'true';
    return 'true';
  // case '@@router/LOCATION_CHANGE':
  //   return ;
  case 'LOGOFF':
    localStorage.auth = 'false';
    return 'false';

  // case 'WRITE_LOCAL':
  //   localStorage.setItem('sessID', action.data);
  //   return state;
  default:
    return state;
  }
}
