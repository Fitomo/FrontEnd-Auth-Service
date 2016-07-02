const moment = require('moment');

module.exports = {
  generateLineChartLabels: (stats) => {
    stats = stats || [];
    const dates = [];
    stats.forEach((datum) => {
      dates.push(moment(datum.date).format('MMMM Do, YYYY'));
    });
    console.log('ALL DATES', dates);
    return dates;
  },

  getData: (stats, type) => {
    stats = stats || [];
    const data = [];
    stats.forEach((datum) => {
      data.push(datum[type]);
    });
    console.log('ALL DATA FOR', type, stats);
  },
};
