import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Tap from './tappresenter';
import * as ajaxUtil from '../../util/ajaxUtil';

// gamify this moar with upgrades etc

function mapStateToProps(state) {
  const xp = state.xp;
  const user = state.user;
  const modalinfo = state.modal;

  return {
    xp,
    user,
    modalinfo,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addGains: (data) => {
      dispatch(actions.addXP(data));
    },

    sendToUser: (user, clicks) => {
      const clickToXp = Math.floor(clicks / 10);

      user.totalXp += clickToXp;
      user.distXp += clickToXp;

      dispatch(actions.showModal({ modalProps: { xpcalc: clickToXp } }));

      ajaxUtil.updateUserInDB(user, (json) => {
        dispatch(actions.setUser(json));
        dispatch(actions.clearXP());
      });
    },

    showModal: () => {
      dispatch(actions.showModal());
    },

    hideModal: () => {
      dispatch(actions.hideModal());
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tap);
