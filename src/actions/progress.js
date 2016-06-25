import thunk from 'redux-thunk';
import {
  GET_PICTURES_SUCCESS, GET_PICTURES_FAIL,
  GET_PICTURES_REQUEST,
} from '../constants/actionTypes';

export function getPicturesSuccess(urls) {
  return {
    type: GET_PICTURES_SUCCESS,
    urls,
  };
}

export function getPicturesFail() {
  return {
    type: GET_PICTURES_FAIL,
  };
}

export function getPicturesRequest() {
  return {
    type: GET_PICTURES_REQUEST,
  };
}

export function getPictures(userId) {
  const request = new XMLHttpRequest();
  const url = `http://localhost:8002/api/download?userId=${userId}`;
  return (dispatch) => {
    dispatch(getPicturesRequest());
    request.open('GET', url);
    request.onload = () => dispatch(getPicturesSuccess(JSON.parse(request.responseText)));
    request.onerror = () => dispatch(getPicturesFail());
    request.send(null);
  };
}
