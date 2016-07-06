require('babel-register');

const express = require('express');
const app = express();
const path = require('path');
const http = require('http').Server(app);
const environment = require('dotenv');
const socketIo = require('socket.io');
const io = socketIo();
const redis = require('socket.io-redis');

// Load environment variables
if (process.env.NODE_ENV === 'development') {
  environment.config({ path: './env/development.env' });
} else if (process.env.NODE_ENV === 'production') {
  environment.config({ path: './env/production.env' });
}

io.adapter(redis({ host: process.env.REDIS_DB, port: 6379 }));
io.attach(http);

const rsock = require('socket.io-emitter')({ host: process.env.REDIS_DB, port: 6379 });

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const config = require('../webpack.config');
const compiler = webpack(config);

app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath }));
app.use(webpackHotMiddleware(compiler));
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

app.use((req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

// Wildcard route
app.get('/*', (req, res) => {
  res.redirect('/');
});

app.listen(8080, () => {
  console.log('(CORS-enabled) Listening on 8080...');
});

const onlineUsers = {};

io.on('connection', (socket) => {
  console.log('Socket connected: ', socket.id);

  socket.on('action', (action) => {
    if (action.type === 'server/hello') {
      socket.emit('action', { type: 'message', data: 'good day!' });
    }
    if (action.type === 'server/addUserOnline') {
      onlineUsers[socket.id] = action.data.id;
      socket.emit('action', { type: 'SOCKET_ADD_ONLINE', data: onlineUsers });
      rsock.emit('action', { type: 'SOCKET_ADD_ONLINE', data: onlineUsers });
    }
  });
  socket.on('disconnect', () => {
    delete onlineUsers[socket.id];
    socket.emit('action', { type: 'SOCKET_DISCONNECT', data: onlineUsers });
  });
});
