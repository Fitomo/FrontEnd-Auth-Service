import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Profile from './profilePresenter';
import * as ajaxUtil from '../../util/ajaxUtil';

function mapStateToProps(state) {
  const userinfo = state.user;
  const modalinfo = state.modal;

  return {
    userinfo,
    modalinfo,
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
    showModal: () => {
      dispatch(actions.showModal({ modalProps: { xpcalc: 0 } }));
    },

    hideModal: () => {
      dispatch(actions.hideModal());
    },

    sync: (data) => {
      if (data.jawbone_id === null) {
        ajaxUtil.calcXpFromFitbit(data, dispatch, (xpGained) => {
          console.log('Total XP Gained', xpGained);
        });
      } else if (data.fitbit_id === null) {
        ajaxUtil.calcXpFromJawbone(data, dispatch, (xpGained) => {
          console.log('Total XP Gained', xpGained);
        });
      }
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
