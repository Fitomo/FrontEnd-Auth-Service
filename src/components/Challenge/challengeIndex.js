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

// TO DO * not in order
// review RESTful
// ajax request from action creator to the database
// fetch all user data
// create friends table
// make a friend request button
// make a challenge button 
// store a list of challenges with unique ids
// distribute xp points to challengers
// display challenges in challengePresenter.js