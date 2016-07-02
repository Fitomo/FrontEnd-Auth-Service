import { sampleAction } from './sample';
import {
  setUser, submitXPtoUser,
  userAddXP, userSubtractXP,
  setLoadedUser,
} from './user';
import {
  addXP, subtractXP,
  clearXP,
} from './xp';
import { showModal, hideModal } from './modal';
import { login, logoff } from './auth';
import { getTopUsers } from './leaderboard';
import {
  setPicture, selectImageWarning, sendPicture, sendPictureRequest, sendPictureSuccess,
  sendPictureFail,
} from './upload';
import {
  configurePhotos, getPictures, getPicturesSuccess, getPicturesFail, getPicturesRequest,
  getPhotoSize, createPhotos, setPhotos, setCurrentPhoto, setPhotoIndex, setConfigs,
} from './progress';
import { setStats, getStats } from './getStats';

export {
  sampleAction,
  setUser,
  userAddXP,
  userSubtractXP,
  setLoadedUser,
  addXP,
  subtractXP,

  configurePhotos,
  selectImageWarning,
  setPicture,
  sendPicture,
  sendPictureRequest,
  sendPictureSuccess,
  sendPictureFail,
  getPictures,
  getPicturesSuccess,
  getPicturesFail,
  getPicturesRequest,
  getPhotoSize,
  createPhotos,
  setPhotos,
  setCurrentPhoto,
  setPhotoIndex,
  setConfigs,

  clearXP,
  showModal,
  hideModal,
  login,
  logoff,
  getTopUsers,

  getStats,
  setStats,
};
// here we are bundling all of the action creators and exporting them as a public interface
