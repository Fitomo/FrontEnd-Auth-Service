import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Upgrade from './upgradePresenter';


// could still access properties given from parent components via <Stream something={thing} />
// function mapStateToProps(state, props) { … }

function mapStateToProps(state) {
  const sample = state.sample;
  // this object is a substate of our global state to be used in presenter to display what data
  return {
    sample,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onPlay: bindActionCreators(actions.sampleAction, dispatch),
//   };
// }

export default connect(mapStateToProps)(Upgrade);
