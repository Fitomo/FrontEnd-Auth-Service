require('babel-register');

const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const environment = require('dotenv');
const Router = require('react-router');
const React = require('react');

// Load environment variables
if (process.env.NODE_ENV === 'development') {
  environment.config({ path: '../env/development.env' });
} else if (process.env.NODE_ENV === 'production') {
  environment.config({ path: '../env/production.env' });
}
var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../webpack.config');
var compiler = webpack(config);
app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));

// Initial Configuration, Static Assets, & View Engine Configuration
require('./config/initialize.js')(app, express);

// Authentication Middleware: Express Sessions, Passport Strategy
require('./config/auth.js')(app, express);

// Pre-Authentication Routes & OAuth Requests
require('./routes/auth-routes.js')(app);

// View Routes
require('./routes/view-routes.js')(app);

// API Routes
require('./routes/api-routes.js')(app);
//console.log('@@@@@@@', path.join(__dirname, '../dist/index.html'));

app.use(function(req, res) {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Wildcard route
app.get('/*', (req, res) => {
  res.redirect('/');





http.listen(8080, 'localhost', () => {
  console.log('Listening on 8080...');
});
