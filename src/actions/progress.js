import * as actionTypes from '../constants/actionTypes';

export function sampleAction(data) {
  return {
    type: actionTypes.SAMPLE_SET,
    data,
  };
}
