const db = require('../config/db.js');
const Challenge = require('./ChallengeModel.js');
const Friend = require('./FriendModel.js');

const User = db.Model.extend({

  tableName: 'users',
  hasTimestamps: true,

  defaults: () => {
    return {
      health: 100,
      level: 1,
      name: 'anon',
      totalXp: 0,
      distXp: 0,
      armXp: 0,
      legXp: 0,
      abXp: 0,
    };
  },

  challenges: () => this.hasMany(Challenge),

  friends: () => this.hasMany(Friend),

});

module.exports = User;
