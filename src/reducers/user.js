import * as actionTypes from '../constants/actionTypes';

const initialState = [];

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.USER_SET:
      return setUser(state, action);
  }
  return state;
}

function setUser(state, action) {
  const userdata = action.userdata;
  return userdata;
  //return [...state, ...userdata];
}
