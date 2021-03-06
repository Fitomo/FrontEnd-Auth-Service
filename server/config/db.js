const knex = require('knex')({
  client: 'mysql',
  connection: {
    host: process.env.MYSQL_HOST,
    database: process.env.MYSQL_DB,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
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
      user.integer('health');
      user.integer('level');
      user.integer('xp');
      user.integer('totalXp');
      user.integer('distXp');
      user.integer('armXp');
      user.integer('legXp');
      user.integer('abXp');
      user.string('accessToken', 1000);
      user.string('refreshToken', 1000);
      user.string('device', 255);
      user.string('fitbit_id', 255);
      user.string('jawbone_id', 255);
      user.integer('steps');
      user.integer('calories');
      user.string('date');
      user.json('followers');
      user.json('following');
      user.integer('win');
      user.integer('lose');
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
