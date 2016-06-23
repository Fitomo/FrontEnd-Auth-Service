import { SET_PICTURE } from '../constants/actionTypes';

export default function (state = {}, action) {
  const { file, src } = action;
  switch (action.type) {
  case SET_PICTURE:
    return Object.assign({}, state, {
      file,
      src,
    });
  default:
    return state;
  }
}
