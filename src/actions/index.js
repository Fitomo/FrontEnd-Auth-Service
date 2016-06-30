import { sampleAction } from './sample';
import {
  setUser, // submitXPtoUser,
  userAddXP, userSubtractXP,
  setLoadedUser,
} from './user';
import {
  addXP, subtractXP,
  clearXP,
} from './xp';
import { showModal, hideModal } from './modal';
import { login, logoff, showLock, lockSuccess, lockError } from './auth';
import {
  setPicture, sendPicture,
  sendPictureRequest, sendPictureSuccess,
  sendPictureFail,
} from './upload';
import {
  getPictures, getPicturesSuccess,
  getPicturesFail, getPicturesRequest,
} from './progress';
import { getTopUsers } from './leaderboard';

export {
  sampleAction, setUser,
  userAddXP, userSubtractXP, setLoadedUser,
  addXP, subtractXP,
  setPicture, sendPicture,
  sendPictureRequest, sendPictureSuccess,
  sendPictureFail, getPictures,
  getPicturesSuccess, getPicturesFail,
  getPicturesRequest, clearXP,
  showModal, hideModal,
  login, logoff, showLock, lockSuccess, lockError,
  getTopUsers,
};
// here we are bundling all of the action creators and exporting them as a public interface

