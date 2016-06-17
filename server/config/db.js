const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: 'localhost',
    database: 'fitomo',
    user: 'root',
    password: '123',
    charset: 'utf8',
  },
});

const db = require('bookshelf')(knex);

db.knex.schema.hasTable('users').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('users', (user) => {
      user.increments('id').primary();
      user.string('username', 255);
      user.string('name', 255);
      user.integer('xp');
      user.string('fitbit_id', 255);
      user.string('jawbone_id', 255);
      user.timestamps();
    }).then((table) => {
      console.log('Created Table users:', table);
    });
  }
});

db.knex.schema.hasTable('challenges').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('challenges', (challenge) => {
      challenge.increments('id').primary();
      challenge.string('message', 1000);
      challenge.integer('duration');
      challenge.string('specified_challenge', 255);
      challenge.string('end_time', 255);
      challenge.integer('challenger_id');
      challenge.integer('receiver_id');
      challenge.timestamps();
    }).then((table) => {
      console.log('Created Table challenges:', table);
    });
  }
});

db.knex.schema.hasTable('friends').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('friends', (friend) => {
      friend.increments('id').primary();
      friend.string('status', 255);
      friend.integer('user1_id');
      friend.integer('user2_id');
      friend.timestamps();
    }).then((table) => {
      console.log('Created Table friends:', table);
    });
  }
});

module.exports = db;
