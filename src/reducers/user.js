import * as actionTypes from '../constants/actionTypes';
import * as levelUtil from '../util/levelUtil';

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
    } else {
      return Object.assign({}, state, {
        distXp: state.distXp - 1,
        [type]: state[type] + 1,
      });
    }
  case actionTypes.USER_XP_SUBTRACT:
    if (state[type] === 0 || state[type] === state.currVals[type]) {
      return state;
    } else {
      return Object.assign({}, state, {
        distXp: state.distXp + 1,
        [type]: state[type] - 1,
      });
    }
  case actionTypes.CHECK_LEVEL:
    const level = levelUtil.checkLevel(action.user);
    return Object.assign({}, state, {
      level,
    });
  default:
    return state;
  }
}
