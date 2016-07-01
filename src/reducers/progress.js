import {
  GET_PICTURES_SUCCESS, GET_PICTURES_FAIL, GET_PICTURES_REQUEST, GET_PHOTO_SIZE, SET_PHOTOS, SET_CURRENT_PHOTO,
  SET_PHOTO_INDEX, SET_CONFIGS,
} from '../constants/actionTypes';

export default function (state = {}, action) {
  const {
    urls,
    value,
    index,
    photos,
    configs,
  } = action;
  switch (action.type) {
  case GET_PICTURES_SUCCESS:
    return Object.assign({}, state, {
      urls,
      isFetching: false,
    });
  case GET_PICTURES_FAIL:
    return Object.assign({}, state, {
      isFetching: false,
    });
  case GET_PICTURES_REQUEST:
    return Object.assign({}, state, {
      isFetching: true,
    });
  case GET_PHOTO_SIZE:
    return Object.assign({}, state, {
    });
  case SET_PHOTOS:
    return Object.assign({}, state, {
      photos,
    });
  case SET_CURRENT_PHOTO:
    return Object.assign({}, state, {
      currentPhoto: value,
    });
  case SET_PHOTO_INDEX:
    return Object.assign({}, state, {
      currentPhoto: index,
    });
  case SET_CONFIGS:
    return Object.assign({}, state, {
      configs,
    });
  default:
    return state;
  }
}
