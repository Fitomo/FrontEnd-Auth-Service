import expect from 'expect'
import * as actionTypes from '../../constants/actionTypes';
import * as actions from '../../actions/index';

describe('actions', () => {
  it('should create an action to add xp', () => {
    const data = 1;
    const expectedAction = {
      type: actionTypes.XP_ADD,
      data
    }
    expect(actions.addXP(data)).toEqual(expectedAction)
  })
})