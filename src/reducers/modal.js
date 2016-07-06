import * as actionTypes from '../constants/actionTypes';

const initialState = {
  modalIsOpen: false,
  modalProps: {
    xpcalc: 0,
    winner: 0,
  },
};

export default function (state = initialState, action) {
  switch (action.type) {
  case actionTypes.SHOW_MODAL:
    return {
      modalIsOpen: true,
      modalProps: action.data.modalProps,
    };
  case actionTypes.HIDE_MODAL:
    return initialState;
  default:
    return state;
  }
}
