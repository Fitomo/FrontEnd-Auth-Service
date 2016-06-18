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
      xp: 0,
      name: 'anon',
    };
  },

  challenges: () => this.hasMany(Challenge),

  friends: () => this.hasMany(Friend),

});

module.exports = User;
