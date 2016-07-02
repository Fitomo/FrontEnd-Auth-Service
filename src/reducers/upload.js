import {
  SET_PICTURE, SELECT_IMAGE_WARNING,
  SEND_PICTURE_SUCCESS, SEND_PICTURE_FAIL,
  SEND_PICTURE_REQUEST,
} from '../constants/actionTypes';

export default function (state = {}, action) {
  const { file, src, msg } = action;
  switch (action.type) {
  case SELECT_IMAGE_WARNING:
    return Object.assign({}, state, {
      imageSelected: false,
      isUploaded: false,
      uploadFailed: false,
    });
  case SET_PICTURE:
    return Object.assign({}, state, {
      file,
      src,
      imageSelected: true,
      isUploaded: false,
      uploadFailed: false,
    });
  case SEND_PICTURE_REQUEST:
    return Object.assign({}, state, {
      isUploaded: false,
      uploadFailed: false,
    });
  case SEND_PICTURE_SUCCESS:
    return Object.assign({}, state, {
      msg,
      file: {},
      src: '',
      imageSelected: false,
      isUploaded: true,
      uploadFailed: false,
    });
  case SEND_PICTURE_FAIL:
    return Object.assign({}, state, {
      imageSelected: false,
      isUploaded: false,
      uploadFailed: true,
    });
  default:
    return state;
  }
}
