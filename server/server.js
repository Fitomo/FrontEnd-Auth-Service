require('babel-register');

const express = require('express');
const app = express();
const http = require('http').Server(app);
const environment = require('dotenv');

// Load environment variables
if (process.env.NODE_ENV === 'development') {
  environment.config({ path: '../env/development.env' });
} else if (process.env.NODE_ENV === 'production') {
  environment.config({ path: '../env/production.env' });
}

// Initial Configuration, Static Assets, & View Engine Configuration
require('./config/initialize.js')(app, express);

// Authentication Middleware: Express Sessions, Passport Strategy
require('./config/auth.js')(app);

// Pre-Authentication Routes & OAuth Requests
require('./routes/auth-routes.js')(app);

// View Routes
require('./routes/view-routes.js')(app);

// API Routes
require('./routes/api-routes.js')(app);

// Wildcard route
app.get('/*', (req, res) => {
  res.redirect('/');
});


http.listen(8080, 'localhost', () => {
  console.log('Listening on 8080...');
});
