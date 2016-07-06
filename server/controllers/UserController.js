const User = require('../models/UserModel.js');
const moment = require('moment');
const request = require('request');
const io = require('socket.io-emitter')({ host: process.env.REDIS_DB, port: 6379 });

module.exports = {
  getCurrentUser: (req, res) => {
    if (!req.session.user) {
      io.emit('action', { type: 'LOGOFF', data: '' });
      res.redirect('/');
    } else {
      const userID = req.session.user;
      User.where({ id: userID }).fetch()
      .then((currentUser) => {
        res.status(200).send(currentUser);
      })
      .catch((err) => {
        console.error(err);
      });
    }
  },

  getAllUsers: (req, res) => {
    const offset = Number(req.params.offset);
    const limit = Number(req.params.limit);
    User.fetchAll()
    .then((users) => {
      users = users.toJSON().sort((a, b) => {
        if (a.totalXp < b.totalXp) {
          return 1;
        } else if (a.totalXp > b.totalXp) {
          return -1;
        }
        return 0;
      });

      res.status(200).send([users.slice(offset, offset + limit), users.length]);
    })
    .catch((err) => {
      console.error(err);
    });
  },

  getOneUser: (req, res) => {
    User.where({ id: req.path.split('/')[3] }).fetch()
    .then((currentUser) => {
      res.status(200).end(JSON.stringify(currentUser));
    })
    .catch((err) => {
      console.error(err);
    });
  },

  refreshUserData: (req, res) => {
    User.where({ id: req.path.split('/')[3] }).fetch()
    .then((currentUser) => {
      res.status(200).send(currentUser);
    })
    .catch((err) => {
      console.error('err', err);
    });
  },

  updateCurrentUser: (req, res) => {
    const data = req.body;
    User.where({ id: req.body.id }).fetch()
    .then((currentUser) => {
      currentUser.set({
        abXp: data.abXp,
        armXp: data.armXp,
        legXp: data.legXp,
        distXp: data.distXp,
        totalXp: data.totalXp,
        name: data.name,
        username: data.username,
        date: data.date,
        level: data.level,
        health: data.health,
        steps: data.steps,
        calories: data.calories,
        followers: data.followers,
        following: data.following,
        win: data.win,
        lose: data.lose,
      });
      currentUser.save().then((curr) => {
        res.status(200).end(JSON.stringify(curr));
      });
    })
    .catch((err) => {
      console.error(err);
    });
  },

  getStats: (req, res) => {
    const userId = Number(req.params.userId);
    const device = req.params.device.toLowerCase();
    const oneMonthAgo = moment().subtract(30, 'd').format('YYYY-MM-DD');
    const today = moment().format('YYYY-MM-DD');
    // Send request to the data-agg microservice to grab data
    request(`http://fitomoDataAggDB:3306/api/${device}/retrieve?id=${userId}&startDate=${oneMonthAgo}&endDate=${today}`,
    (dataAggErr, response) => {
      if (dataAggErr) {
        console.error('Error getting data from data aggregation service:', dataAggErr);
      } else {
        // Get slope of data from previous week
        const yesterdayFormatted = moment().subtract(1, 'd').format('YYYYMMDD');
        const eightDaysAgoFormatted = moment().subtract(8, 'd').format('YYYYMMDD');
        let yesterdayData = {};
        let eightDaysAgoData = {};
        const parsedBody = JSON.parse(response.body);
        for (let i = 0; i < parsedBody.length; i++) {
          if (parsedBody[i].date === Number(eightDaysAgoFormatted)) {
            eightDaysAgoData = parsedBody[i];
          }
          if (parsedBody[i].date === Number(yesterdayFormatted)) {
            yesterdayData = parsedBody[i];
          }
        }
        const stepSlope = (yesterdayData.steps - eightDaysAgoData.steps) / eightDaysAgoData.steps;
        const sleepSlope = (yesterdayData.totalSleep - eightDaysAgoData.totalSleep) / eightDaysAgoData.totalSleep;
        const hrSlope = (yesterdayData.restingHR - eightDaysAgoData.restingHR) / eightDaysAgoData.restingHR;
        // Send data prediction service to get health score prediction
        request(`http://predictionServiceDB:5432/api/getPrediction?date=${yesterdayFormatted}&user_id=${userId}&steps=${yesterdayData.steps}&total_sleep=${yesterdayData.totalSleep}&resting_hr=${yesterdayData.restingHR}&step_week_slope=${stepSlope}&sleep_week_slope=${sleepSlope}&hr_week_slope=${hrSlope}`,
          (predictionErr, data) => {
            if (predictionErr) {
              console.error('Error getting data from prediction service:', predictionErr);
            } else {
              let parsedData = JSON.parse(data.body);
              if (parsedData === null) {
                parsedData = {};
              }
              const allData = {
                data: JSON.parse(response.body),
                prediction: parsedData.prediction || 0,
                healthScore: parsedData.curr_health_score || 0,
              };
              res.status(200).send(allData);
            }
          }
        );
      }
    });
  },
};
