import thunk from 'redux-thunk';
import { 
  SET_PICTURE, SEND_PICTURE_REQUEST,
  SEND_PICTURE_SUCCESS, SEND_PICTURE_FAIL,
} from '../constants/actionTypes';

export function setPicture(file, src) {
  return {
    type: SET_PICTURE,
    file,
    src,
  };
}

export function sendPictureRequest() {
  return {
    type: SEND_PICTURE_REQUEST,
  };
}

export function sendPictureSuccess(data) {
  return {
    type: SEND_PICTURE_SUCCESS,
    data,
  };
}

export function sendPictureFail() {
  return {
    type: SEND_PICTURE_FAIL,
  };
}

export function sendPicture(file) {
  const request = new XMLHttpRequest();
  const url = 'http://localhost:8002/api/upload';
  const formData = new FormData();
  formData.append('file', file);
  return (dispatch) => {
    dispatch(sendPictureRequest());
    request.open('POST', url);
    request.onload = () => dispatch(sendPictureSuccess(request.responseText));
    request.onerror = () => dispatch(sendPictureFail());
    request.send(formData);
  };
}
