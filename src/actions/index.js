import { sampleAction } from './sample';
import { setUser } from './user';
import { addXP, subtractXP } from './xp';
import { setPicture } from './upload';
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
  clearXP,
  // submitXPtoUser,
  showModal,
  hideModal,
  login,
  logoff,
};


// here we are bundling all of the action creators and exporting them as a public interface
