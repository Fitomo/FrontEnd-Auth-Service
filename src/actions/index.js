import { sampleAction } from './sample';
import { setUser, submitXPtoUser } from './user';
import { addXP, subtractXP } from './xp';
import {
  setPicture, sendPicture,
  sendPictureRequest, sendPictureSuccess,
  sendPictureFail,
} from './upload';
import {
  getPictures, getPicturesSuccess,
  getPicturesFail, getPicturesRequest,
} from './progress';

export {
  sampleAction,
  setUser,
  addXP,
  subtractXP,
  submitXPtoUser,
  setPicture,
  sendPicture,
  sendPictureRequest,
  sendPictureSuccess,
  sendPictureFail,
  getPictures,
  getPicturesSuccess,
  getPicturesFail,
  getPicturesRequest,
};

// here we are bundling all of the action creators and exporting them as a public interface
