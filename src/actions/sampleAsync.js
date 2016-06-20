import thunk from 'redux-thunk';
import * as actionTypes from '../constants/actionTypes';

function setChallenge(payload) {
  return { type: actionTypes.SAMPLE_SET, payload };
}

export function fetchChallnege(id) {
  return dispatch => {
    fetch(`/challenge/${id}`, (response) => {
      if (response.status === 200) {
        dispatch(setChallenge(response.json)); // Use a normal function to set the received state
      } else { 
        dispatch('some error'); 
      }
    });
  };
}
