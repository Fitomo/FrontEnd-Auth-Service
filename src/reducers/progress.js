import * as actionTypes from '../constants/actionTypes';

export default function (state = [], action) {
  switch (action.type) {
  case actionTypes.SAMPLE_SET:
    return 'something';
  default:
    return state;
  }
}
