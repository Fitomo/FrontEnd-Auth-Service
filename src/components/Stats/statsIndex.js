import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import * as actionTypes from '../../constants/actionTypes';
import Stats from './statsPresenter';
import chartUtil from '../../util/chartUtil';
const moment = require('moment');

function mapStateToProps(state) {
  const user = state.user;
  const stats = state.stats;
  const lineChartData = {
    labels: chartUtil.generateLineChartLabels(state.stats.data),
    datasets: [
      { fillColor: '#0F1C2F',
        strokeColor: '#0F1C2F',
        pointColor: '#0F1C2F',
        data: chartUtil.getData(state.stats.data, 'steps') },
      { fillColor: '#6088D0',
        strokeColor: '#6088D0',
        pointColor: '#6088D0',
        data: chartUtil.getData(state.stats.data, 'sleep') },
      { fillColor: '#441013',
        strokeColor: '#441013',
        pointColor: '#441013',
        data: chartUtil.getData(state.stats.data, 'restingHR') },
    ],
  };
  return {
    user,
    stats,
    lineChartData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    // getStats: (userId, device) => {
    //   fetch(`/api/user/${userId}/stats/${device}`)
    //   .then((res) => res.json())
    //   .then((stats) => dispatch({ type: actionTypes.GET_STATS, stats }))
    //   .catch((err) => {
    //     console.error('Error in retrieving user stats:', err);
    //   });
    // },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Stats);
