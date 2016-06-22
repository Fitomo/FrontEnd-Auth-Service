import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Upgrade from './upgradePresenter';
import $ from 'jquery';

// could still access properties given from parent components via <Stream something={thing} />
// function mapStateToProps(state, props) { … }

function mapStateToProps(state) {
  const distXp = state.user.distXp;
  const user = state.user;

  return {
    distXp,
    user,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // onClickMinus: bindActionCreators(actions.minusXP, dispatch),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Upgrade);
