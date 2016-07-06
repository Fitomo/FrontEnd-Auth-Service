import React from 'react';
import { connect } from 'react-redux';
import Stats from './statsPresenter';
import statsUtil from '../../util/statsUtil';

function mapStateToProps(state) {
  const user = state.user;
  const stats = state.stats;
  const stepsChartData = {
    labels: statsUtil.generateLineChartLabels(stats.data),
    datasets: [
      { fillColor: 'rgba(15,28,47,0.2)',
        strokeColor: 'rgba(15,28,47,0.2)',
        pointColor: 'rgba(15,28,47,0.2)',
        data: statsUtil.getData(stats.data, 'steps') },
    ],
  };
  const sleepChartData = {
    labels: statsUtil.generateLineChartLabels(stats.data),
    datasets: [
      { fillColor: 'rgba(96,136,208,0.2)',
        strokeColor: 'rgba(96,136,208,0.2)',
        pointColor: 'rgba(96,136,208,0.2)',
        data: statsUtil.getData(stats.data, 'totalSleep') },
    ],
  };
  const hrChartData = {
    labels: statsUtil.generateLineChartLabels(stats.data),
    datasets: [
      { fillColor: 'rgba(68,16,19,0.2)',
        strokeColor: 'rgba(68,16,19,0.2)',
        pointColor: 'rgba(68,16,19,0.2)',
        data: statsUtil.getData(stats.data, 'restingHR') },
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

Stats.propTypes = {
  user: React.PropTypes.object,
  stats: React.PropTypes.object,
  stepsChartData: React.PropTypes.object,
  sleepChartData: React.PropTypes.object,
  hrChartData: React.PropTypes.object,
};

export default connect(mapStateToProps)(Stats);
