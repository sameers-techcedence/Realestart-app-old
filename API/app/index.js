/*
 *    Top level index.js is entrypoint to rest-api application
 *    Test code will skip this execution. This is an abstraction
 *    above server startup to provide a place for production-related code.
 */
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
const logger = require('./logger');
const server = require('./server');

server.startServer();
module.exports = server;
// PM2 will restart the server in production
if (process.env.NODE_ENV === 'production') {
  process.on('uncaughtException', (err) => {
    logger.error(`\n\nUncaught Exception thrown! Exiting with status 1...\n\n${err}`);
    process.exit(1);
  });
}
