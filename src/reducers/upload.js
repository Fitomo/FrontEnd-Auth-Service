import { 
  SET_PICTURE, SEND_PICTURE_SUCCESS,
  SEND_PICTURE_FAIL, SEND_PICTURE_REQUEST,
} from '../constants/actionTypes';

export default function (state = {}, action) {
  const { file, src } = action;
  switch (action.type) {
  case SET_PICTURE:
    return Object.assign({}, state, {
      file,
      src,
    });
  case SEND_PICTURE_REQUEST:
    return Object.assign({}, state, {
    });
  case SEND_PICTURE_SUCCESS:
    return Object.assign({}, state, {
    });
  case SEND_PICTURE_FAIL:
    return Object.assign({}, state, {
    });
  default:
    return state;
  }
}
