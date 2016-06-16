var connection = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    database: process.env.APP_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: 'utf8'
  }
};

var knex = require('knex')(connection);

connection.database = process.env.APP_NAME;
var db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then(function(exists) {
  if (!exists) {
    db.knex.schema.createTable('users', function (user) {
      user.increments('id').primary();
    }).then(function (table) {
      console.log('Created Table users:', table);
    });
  }
});

module.exports = db;
