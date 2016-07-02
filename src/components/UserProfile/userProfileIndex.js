import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import UserProfile from './userProfilePresenter';
import * as ajaxUtil from '../../util/ajaxUtil';
import $ from 'jquery';

function mapStateToProps(state) {
  const loadedUserinfo = state.loadeduser;
  const user = state.user;
  return {
    loadedUserinfo,
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

    addFriend: (loaded, user) => {
      if (user.id !== loaded.id) {
        if (JSON.parse(user.following).indexOf(loaded.id) === -1) {
          user.following = JSON.stringify([JSON.parse(user.following).push(loaded.id)]);
          loaded.followers = JSON.stringify([JSON.parse(loaded.followers).push(user.id)]);
          dispatch(actions.setLoadedUser(loaded));
          dispatch(actions.setUser(user));
          $('#follow').addClass('hidden');
          $('#unfollow').removeClass('hidden');
        }
      }
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);
