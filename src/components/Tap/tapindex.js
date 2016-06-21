import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Tap from './tappresenter';

//gamify this moar with upgrades etc

function mapStateToProps(state) {
  const xp = state.xp;
  return {
    xp,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addGains: (data) => {
      dispatch(actions.addXP(data));
    },

    // add a submit dispatch event that calculates how much xp was earned for sesh
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tap);
