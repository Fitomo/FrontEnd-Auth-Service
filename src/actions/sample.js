import * as actionTypes from '../constants/actionTypes';

// tracks is an array of objects

export function sampleAction(payload) {
  return {
    type: actionTypes.SAMPLE_SET,
    payload,
  };
}

// return an object with action type and payload
