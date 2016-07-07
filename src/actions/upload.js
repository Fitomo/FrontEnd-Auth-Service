import thunk from 'redux-thunk';
import {
  SELECT_IMAGE_WARNING, SET_PICTURE,
  SEND_PICTURE_REQUEST, SEND_PICTURE_SUCCESS,
  SEND_PICTURE_FAIL,
} from '../constants/actionTypes';

export function setPicture(file, src) {
  return {
    type: SET_PICTURE,
    file,
    src,
  };
}

export function selectImageWarning() {
  return {
    type: SELECT_IMAGE_WARNING,
  };
}

export function sendPictureRequest() {
  return {
    type: SEND_PICTURE_REQUEST,
  };
}

export function sendPictureSuccess(msg) {
  return {
    type: SEND_PICTURE_SUCCESS,
    msg,
  };
}

export function sendPictureFail() {
  return {
    type: SEND_PICTURE_FAIL,
  };
}

export function sendPicture(file, userId) {
  const request = new XMLHttpRequest();
  const url = `http://${process.env.FILE_REQUEST_SERVER}/api/upload`;
  console.log('url', url, "file_req_serv", process.env.FILE_REQUEST_SERVER);
  const formData = new FormData();
  formData.append('file', file);
  formData.append('userId', userId);
  return (dispatch) => {
    console.log('url in dispatch', url)
    dispatch(sendPictureRequest());
    request.open('POST', url);
    request.onload = () => dispatch(sendPictureSuccess(request.responseText));
    request.onerror = () => dispatch(sendPictureFail());
    request.send(formData);
  };
}
