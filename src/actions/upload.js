import { SET_PICTURE } from '../constants/actionTypes';

export function setPicture(file, src) {
  return {
    type: SET_PICTURE,
    file,
    src,
  };
}
