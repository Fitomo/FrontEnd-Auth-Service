import * as actionTypes from '../constants/actionTypes';

export default function (state = [], action) {
  const type = action.data;

  switch (action.type) {
  case actionTypes.USER_SET:
    return Object.assign({}, action.userdata, {
      currVals: { armXp: action.userdata.armXp, legXp: action.userdata.legXp, abXp: action.userdata.abXp },
    });
  case actionTypes.USER_XP_ADD:
    if (state.distXp === 0 || state[type] > 1000) {
      return state;
    }
    return Object.assign({}, state, {
      distXp: state.distXp - 1,
      [type]: state[type] + 1,
    });
  case actionTypes.USER_XP_SUBTRACT:
    if (state[type] === 0 || state[type] === state.currVals[type]) {
      return state;
    }
    return Object.assign({}, state, {
      distXp: state.distXp + 1,
      [type]: state[type] - 1,
    });
  default:
    return state;
  }
}
