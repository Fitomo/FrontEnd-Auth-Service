import * as actionTypes from '../constants/actionTypes';

export function showModal(data) {
  return {
    type: actionTypes.SHOW_MODAL,
    data,
  };
}

export function hideModal(data) {
  return {
    type: actionTypes.HIDE_MODAL,
    data,
  };
}


// return an object with action type and payload
