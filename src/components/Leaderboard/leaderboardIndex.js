import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Leaderboard from './leaderboardPresenter';
// import * as ajaxUtil from '../../util/ajaxUtil';

function mapStateToProps(state) {
  const statetree = state;
  const leaderboard = state.leaderboard;
  //const totalUsers = 0;
  return {
    statetree,
    leaderboard,
    //totalUsers,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    getEntry: (limit, offset) => {
      fetch('/api/all/'+limit+'/'+offset)
      .then((res) => { return res.json(); })
      .then((json) => {
        console.log('thejson', json);
        dispatch({ type: 'GET_TOP_USERS_SUCCESS', payload: json });
      })
      .catch((resp) => { dispatch({ type: 'GET_TOP_USERS_FAILURE' }); });
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Leaderboard);