const db = require('../config/db.js');
const Challenge = require('./ChallengeModel.js');
const Friend = require('./FriendModel.js');

const User = db.Model.extend({

  tableName: 'users',
  hasTimestamps: true,

  challenges: () => this.hasMany(Challenge),

  friends: () => this.hasMany(Friend),

});

module.exports = User;
