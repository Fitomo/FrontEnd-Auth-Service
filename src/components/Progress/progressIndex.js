import React from 'react';
// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Progress from './progressPresenter';

function mapStateToProps(state) {
  return {
  };
}

// function mapDispatchToProps(dispatch) {
//   return {
//   };
// }

export default connect(mapStateToProps)(Progress);

