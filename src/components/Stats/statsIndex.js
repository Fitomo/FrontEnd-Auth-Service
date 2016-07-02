import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as actions from '../../actions/index';
import * as actionTypes from '../../constants/actionTypes';
import Stats from './statsPresenter';
import statsUtil from '../../util/statsUtil';

function mapStateToProps(state) {
  const user = state.user;
  const stats = state.stats;
  const stepsChartData = {
    labels: statsUtil.generateLineChartLabels(state.stats.data),
    datasets: [
      { fillColor: 'rgba(15,28,47,0.2)',
        strokeColor: 'rgba(15,28,47,0.2)',
        pointColor: 'rgba(15,28,47,0.2)',
        data: statsUtil.getData(state.stats.data, 'steps') },
    ],
  };
  const sleepChartData = {
    labels: statsUtil.generateLineChartLabels(state.stats.data),
    datasets: [
      { fillColor: 'rgba(96,136,208,0.2)',
        strokeColor: 'rgba(96,136,208,0.2)',
        pointColor: 'rgba(96,136,208,0.2)',
        data: statsUtil.getData(state.stats.data, 'totalSleep') },
    ],
  };
  const hrChartData = {
    labels: statsUtil.generateLineChartLabels(state.stats.data),
    datasets: [
      { fillColor: 'rgba(68,16,19,0.2)',
        strokeColor: 'rgba(68,16,19,0.2)',
        pointColor: 'rgba(68,16,19,0.2)',
        data: statsUtil.getData(state.stats.data, 'restingHR') },
    ],
  };
  return {
    user,
    stats,
    stepsChartData,
    sleepChartData,
    hrChartData,
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
