import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.SAMPLE_SET:
      return setSample(state, action);
  }
  return state;
}

function setSample(state, action) {
  // this line extracts the property from object and makes var named same
  const { payload } = action;

  // console.log('SET',  state, action, payload);
  return [...state, ...payload];
  // this is the same as state.concat(tracks)
  // use destructuring to keep immutability
}
