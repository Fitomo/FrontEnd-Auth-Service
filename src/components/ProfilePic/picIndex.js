import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import ProfilePic from './picPresenter';

function mapStateToProps(state) {
  //console.log('STATE', state);
  const userinfo = state.user;
  return {
    userinfo,
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//     onPlay: bindActionCreators(actions.sampleAction, dispatch),
//   };
// }

export default connect(mapStateToProps)(ProfilePic);
