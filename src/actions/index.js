import { sampleAction } from './sample';
import { setUser, submitXPtoUser } from './user';
import { addXP, subtractXP } from './xp';
import { setPicture, sendPicture, sendPictureRequest,
         sendPictureSuccess, sendPictureFail } from './upload';

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
};

// here we are bundling all of the action creators and exporting them as a public interface
