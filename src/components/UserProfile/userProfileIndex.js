import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import UserProfile from './userProfilePresenter';
import * as ajaxUtil from '../../util/ajaxUtil';

function mapStateToProps(state) {
  const userinfo = state.loadeduser;
  const user = state.user;
  return {
    userinfo,
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    loadData: (userId) => {
      fetch('/api/oneuser/'+userId)
      .then((response) => {
        console.log('theresponse', response);
        return response.json();
      })
      .then((json) => {
        dispatch(actions.setLoadedUser(json));
      });
    },

    addFriend: () => {
      
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
