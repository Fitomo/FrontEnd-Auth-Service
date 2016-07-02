const moment = require('moment');

module.exports = {
  generateLineChartLabels: (stats) => {
    stats = stats || [];
    const dates = [];
    stats.forEach((datum) => {
      dates.push(datum.date);
    });
    const sorted = dates.sort((a, b) => a - b);
    return sorted.map((date) => moment(date.toString()).format('MMM Do, YYYY'));
  },

  getData: (stats, type) => {
    stats = stats || [];
    const data = [];
    stats.forEach((datum) => {
      data.push([datum.date, datum[type]]);
    });
    const sorted = data.sort((a, b) => a[0] - b[0]);
    return sorted.map((tuple) => tuple[1]);
  },

  mapHealthScore: (score) => {
    if (score < 15) {
      return 'You are in really bad health. Please go to the hospital.';
    } else if (score < 25) {
      return 'You could use some help.';
    } else if (score < 35) {
      return 'You\'re doing average.';
    } else if (score < 45) {
      return 'You\re doing well!';
    } else if (score < 55) {
      return 'You\'re in really good shape. Keep it up!';
    } else {
      return 'You\'re a beast!! Don\'t let anyone tell you otherwise!';
    }
  },
};
