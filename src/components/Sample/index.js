import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import Sample from './presenter';


// could still access properties given from parent components via <Stream something={thing} />
// function mapStateToProps(state, props) { … }

function mapStateToProps(state) {
  // console.log('STATE', state);
  const sample = state.sample;
  // console.log('SAMPLE', sample);
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

export default connect(mapStateToProps)(Sample);

// using the returned function of connect to take our Sample component
// as argument to return a higher order component. The higher order component
// is able to access the Redux store while the Stream component itself is only presenting our data.
