import { sampleAction } from './sample';
import { 
  setUser, submitXPtoUser,
  userAddXP, userSubtractXP,
} from './user';
import {
  addXP, subtractXP,
  clearXP,
} from './xp';
import { showModal, hideModal } from './modal';
import { login, logoff } from './auth';
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
  userAddXP, userSubtractXP,
  addXP, subtractXP,
  setPicture, sendPicture,
  sendPictureRequest, sendPictureSuccess,
  sendPictureFail, getPictures,
  getPicturesSuccess, getPicturesFail,
  getPicturesRequest, clearXP,
  showModal, hideModal,
  login, logoff,
  getTopUsers,
}
// here we are bundling all of the action creators and exporting them as a public interface
