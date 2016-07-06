const moment = require('moment');

module.exports = {
  generateLineChartLabels: (stats) => {
    stats = stats || [];
    const dates = [];
    stats.forEach((datum) => {
      dates.push(datum.date);
    });
    // Sort data by date then map to a more readable format
    const sorted = dates.sort((a, b) => a - b);
    return sorted.map((date) => moment(date.toString()).format('MMM Do, YYYY'));
  },

  getData: (stats, type) => {
    stats = stats || [];
    const data = [];
    stats.forEach((datum) => {
      data.push([datum.date, datum[type]]);
    });
    // Sort data by date then return actual value
    const sorted = data.sort((a, b) => a[0] - b[0]);
    return sorted.map((tuple) => tuple[1]);
  },

  mapCurrentHealthScore: (score) => {
    if (score === 0) {
      return 'Insufficient information to make a judgement.';
    } else if (score < 15) {
      return 'You are in really bad health. Please go to the hospital.';
    } else if (score < 25) {
      return 'You\'re below average health.';
    } else if (score < 35) {
      return 'You\'re doing average.';
    } else if (score < 45) {
      return 'You\'re doing well!';
    } else if (score < 55) {
      return 'You\'re in really good shape. Keep it up!';
    } else {
      return 'You\'re a beast!! Don\'t let anyone tell you otherwise!';
    }
  },

  mapFutureHealthScore: (score) => {
    if (score === 0) {
      return 'Insufficient information to make a judgement.';
    } else if (score < 15) {
      return 'Based on your past week\'s trends, you\'re projected to be in really bad health in the near future. Please go to the hospital.';
    } else if (score < 25) {
      return 'Based on your past week\'s trends, you\'re projected to be below average health in the near future.';
    } else if (score < 35) {
      return 'Based on your past week\'s trends, you\'re projected to be doing average in the near future.';
    } else if (score < 45) {
      return 'Based on your past week\'s trends, you\'re projected to be doing well in the near future!';
    } else if (score < 55) {
      return 'Based on your past week\'s trends, you\'re projected to be in really good shape in the near future. Keep it up!';
    } else {
      return 'Based on your past week\'s trends, you\'re projected to be a beast!! Don\'t let anyone tell you otherwise!';
    }
  },
};
