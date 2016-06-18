const session = require('express-session');

module.exports = (app, express, passport) => {
  app.use(session({
    name: 'fitomo',
    secret: 'fitomo',
    resave: true, 
    saveUninitialized: false,
    rolling: true,
  }));
};
