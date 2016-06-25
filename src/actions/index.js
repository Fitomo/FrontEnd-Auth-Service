import { sampleAction } from './sample';
<<<<<<< HEAD
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
import { setUser, userAddXP, userSubtractXP } from './user';
import { addXP, subtractXP, clearXP } from './xp';
import { showModal, hideModal } from './modal';
import { login, logoff } from './auth';

export {
  sampleAction,
  setUser,
  userAddXP,
  userSubtractXP,
  addXP,
  subtractXP,
  setPicture,
  sendPicture,
  sendPictureRequest,
  sendPictureSuccess,
  sendPictureFail,
  getPictures,
  getPicturesSuccess,
  getPicturesFail,
  getPicturesRequest,
  clearXP,
  // submitXPtoUser,
  showModal,
  hideModal,
  login,
  logoff,
};

// here we are bundling all of the action creators and exporting them as a public interface
