const db = require('../config/db.js');
const User = require('./UserModel.js');

const Friend = db.Model.extend({

  tableName: 'friends',
  hasTimestamps: true,

  user: () => this.belongTo(User, 'userId')

});

module.exports = Friend;
