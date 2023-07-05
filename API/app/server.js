const express = require('express');
const apiLogger = require('express-bunyan-logger');
const { Format: { internalError }, restServer } = require('./commons');

require('dotenv').config()
const logger = require('./logger');
const routes = require('./route');
const { version } = require('../package');
const config = require('./config');
const path = require('path');

const { port, uri } = config;

const name = 'Brand Peep';

/**
 * Middleware for handle restful API error
 *
 * @param  {Object} error - Error instance
 * @param  {Object} req - Requests
 * @param  {Object} res - Response
 * @param  {Object} next - Next
 */
const errorHandler = (error, req, res, next) => {
  logger.error(error, `${error.message}`);
  if (error.message) {
    error.code = res.status;
  } else if (error.name && !error.message) {
    error.message = error.name;
  }
  res.body = error;
  internalError(req, res, error);
  next();
};

const server = restServer({
  name,
  uri,
}, logger);

// Setup request logger
server.use(apiLogger({
  name: 'RequestLog',
  streams: [{
    level: 'debug',
    stream: process.stdout,
  }],
}));
server.use('/apidocs', express.static(path.resolve(__dirname, '../../apidocs')));

server.set('Access-Control-Allow-Origin', 'http://localhost:4200', 'https://lfmapp.netlify.app/');
server.use('/uploads', express.static(path.resolve(__dirname, '../src/uploads')));
/**
  *
  * @returns {Promise.<void>}
  */
function startServer() {
  routes(server);
  const server1 = server.listen(process.env.PORT, () => logger.info(name, { port, version }));
  const socket = require('socket.io')(server1, {
    cors: {
      origin: '*',
      methods: ['GET', 'POST'],
      allowedHeaders: ['my-custom-header'],
      credentials: true,
    },
  });
  // On every Client Connection
  socket.on('connection', (socket) => {
    console.log('Socket: client connected');
  });
  global.socketData = socket;
  server.use(errorHandler);
}

module.exports = { server, startServer, errorHandler };
if (require.main === module) {
  startServer().catch(err => logger.error(err, 'There was a problem starting the server'));
}
