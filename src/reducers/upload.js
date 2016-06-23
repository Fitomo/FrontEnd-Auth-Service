import { SET_PICTURE } from '../constants/actionTypes';

export default function (state = {}, action) {
  switch (action.type) {
  case SET_PICTURE:
    return Object.assign({}, state, {
      file: action.file,
      src: action.src,
    });
  default:
    return state;
  }
}
