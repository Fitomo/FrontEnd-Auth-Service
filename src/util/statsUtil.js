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

  mapHealthScore: (score) => {
    if (score === 0) {
      return 'Insufficient information to make a judgement.';
    } else if (score < 15) {
      return 'Please check into the hospital.';
    } else if (score < 25) {
      return 'Below average.';
    } else if (score < 35) {
      return 'Average.';
    } else if (score < 45) {
      return 'Above average.';
    } else if (score < 55) {
      return 'Well above average.';
    } else {
      return 'BEASTMODE';
    }
  },
};
