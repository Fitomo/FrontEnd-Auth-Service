import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Leaderboard from './LeaderboardPresenter';
import * as ajaxUtil from '../../util/ajaxUtil';

function mapStateToProps(state) {
  const statetree = state;

  return {
    statetree
  };
}

function mapDispatchToProps(dispatch) {
  return {
    sendData: (user, username, name) => {
      user.username = username;
      user.name = name;

      ajaxUtil.updateUserInDB(user, (json) => {
        dispatch(actions.setUser(json));
        dispatch(actions.hideModal());
        dispatch({ type: 'server/addUserOnline', data: json });
      });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);