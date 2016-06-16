const express = require('express');
const passport = require('passport');
const app = express();
const http = require('http').Server(app);
// Load environment variables
if (process.env.NODE_ENV === 'development') {
  require('dotenv').config({ path: '../env/development.env' });
} else if (process.env.NODE_ENV === 'production') {
  require('dotenv').config({ path: '../env/production.env' });
}
// Initial Configuration, Static Assets, & View Engine Configuration
require('./config/initialize.js')(app, express);
// Authentication Middleware: Express Sessions, Passport Strategy
require('./config/auth.js')(app, express, passport);

// Pre-Authentication Routes & OAuth Requests
require('./routes/auth-routes.js')(app, passport);

// View Routes
require('./routes/view-routes.js')(app);

// API Routes
require('./routes/api-routes.js')(app);

// Wildcard route
app.get('/*', (req, res) => {
  res.redirect('/');
});

http.listen(Number(process.env.PORT), process.env.HOST, () => {
  console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  console.log(`${process.env.APP_NAME} listening at ${process.env.HOST}`);
  console.log(`On port ${process.env.PORT}.`);
});
