import thunk from 'redux-thunk';
import { spring } from 'react-motion';
import {
  GET_PICTURES_SUCCESS, GET_PICTURES_FAIL,
  GET_PICTURES_REQUEST, GET_PHOTO_SIZE,
  SET_PHOTOS, SET_CURRENT_PHOTO,
  SET_PHOTO_INDEX, SET_CONFIGS,
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

export function getPhotoSize() {
  return {
    type: GET_PHOTO_SIZE,
  };
}

export function setPhotos(photos) {
  return {
    type: SET_PHOTOS,
    photos,
  };
}


export function setConfigs(configs) {
  return {
    type: SET_CONFIGS,
    configs,
  };
}

export function configurePhotos() {
  const springSettings = { stiffness: 300, damping: 100 };
  return (dispatch, getState) => {
    const { progress } = getState();
    const { photos, currentPhoto } = progress;
    const [, height] = photos[currentPhoto]; // getting only the height

    const widths = photos.map(([w, h]) => height / h * w);
    const leftStart = widths.slice(0, currentPhoto).reduce((sum, width) => sum - width, 0);

    const configs = [];
    photos.reduce((previousLeft, [w, h], i) => {
      configs.push({
        left: spring(previousLeft, springSettings),
        height: spring(height, springSettings),
        width: spring(widths[i], springSettings),
      });
      return previousLeft + widths[i];
    }, leftStart);

    dispatch(setConfigs(configs));
  };
}

const getMeta = (url) => new Promise((resolve, reject) => {
  const img = new Image();
  img.onload = () => {
    const ratio = img.width / img.height;
    const height = 600; // set height
    const width = height * ratio;
    resolve([width, height]);
  };
  img.onerror = (msg) => reject(msg);
  img.src = url;
});

const getMetaAsyncLoop = (urls, callback) => {
  const promises = [];
  urls.forEach(({ url }) => promises.push(getMeta(url)));
  return Promise.all(promises).then((values) => callback(values));
};

export function createPhotos() {
  return (dispatch, getState) => {
    const { progress } = getState();
    const { urls } = progress;
    let photos = [];
    getMetaAsyncLoop(urls, (values) => {
      photos = photos.concat(values);
      dispatch(setPhotos(photos));
      dispatch(configurePhotos());
    });
  };
}

export function setCurrentPhoto(value) {
  return {
    type: SET_CURRENT_PHOTO,
    value,
  };
}

export function setPhotoIndex(index) {
  return {
    type: SET_PHOTO_INDEX,
    index,
  };
}

export function getPictures(userId) {
  const request = new XMLHttpRequest();
  const url = `http://${process.env.FILE_REQUEST_SERVER}/api/download?userId=${userId}`;
  return (dispatch) => {
    dispatch(getPicturesRequest());
    request.open('GET', url);
    request.onload = () => {
      dispatch(getPicturesSuccess(JSON.parse(request.responseText)));
      dispatch(createPhotos());
    };
    request.onerror = () => dispatch(getPicturesFail());
    request.send(null);
  };
}
