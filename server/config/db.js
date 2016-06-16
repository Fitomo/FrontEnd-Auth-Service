const connection = {
  client: 'mysql',
  connection: {
    host: 'localhost',
    database: process.env.APP_NAME,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    charset: 'utf8',
  },
};

const knex = require('knex')(connection);

connection.database = process.env.APP_NAME;
const db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('users', (user) => {
      user.increments('id').primary();
    }).then((table) => {
      console.log('Created Table users:', table);
    });
  }
});

module.exports = db;
