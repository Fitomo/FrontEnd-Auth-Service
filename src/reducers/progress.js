import {
  GET_PICTURES_SUCCESS, GET_PICTURES_FAIL,
  GET_PICTURES_REQUEST,
} from '../constants/actionTypes';

export default function (state = {}, action) {
  const { urls } = action;
  switch (action.type) {
  case GET_PICTURES_SUCCESS:
    return Object.assign({}, state, {
      urls,
    });
  case GET_PICTURES_FAIL:
    return Object.assign({}, state, {
    });
  case GET_PICTURES_REQUEST:
    return Object.assign({}, state, {
    });
  default:
    return state;
  }
}
