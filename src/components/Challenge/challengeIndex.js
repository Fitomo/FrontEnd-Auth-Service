import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Challenge from './challengePresenter';

function mapStateToProps(state) {
  const { xp, level } = state.user;
  return {
    xp,
    level,
  };
}

export default connect(mapStateToProps)(Challenge);

