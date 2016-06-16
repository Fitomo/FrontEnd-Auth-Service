const db = require('../config/db.js');
const User = require('./UserModel.js');

const Challenge = db.Model.extend({

  tableName: 'challenges',
  hasTimestamps: true,

  challenger: () => this.belongTo(User, 'userId'),

  receiver: () => this.belongTo(User, 'userId')

});

module.exports = Challenge;
