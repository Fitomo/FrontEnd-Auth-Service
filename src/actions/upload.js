import { SET_PICTURE, SEND_PICTURE_REQUEST, SEND_PICTURE_SUCCESS, SEND_PICTURE_FAIL } from '../constants/actionTypes';
import ReduxThunk from 'redux-thunk';

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

export function sendPictureFail(error) {
  return {
    type: SEND_PICTURE_FAIL,
    error,
  };
}

export function sendPicture(file, src) {
  const payload = {
    filename: file.name,
    filetype: file.type,
    data_uri: src,
  };
  return (dispatch) => {
    dispatch(sendPictureRequest());
    const request = new XMLHttpRequest();
    const url = 'http://localhost:8002/api/upload';
    request.open('POST', url);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded; charset=UTF-8');
    request.send(JSON.stringify(payload));
    // .then((response) => response.json())
    // .then((json) => dispatch(sendPictureSuccess(json)))
    // .catch((error) => dispatch(sendPictureFail(error)));
  };
}
