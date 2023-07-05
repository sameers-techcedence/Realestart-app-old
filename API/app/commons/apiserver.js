const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { resolve } = require('path');
const swaggerUi = require("swagger-ui-express");
const swaggerJsdoc = require("swagger-jsdoc");
const swagger = require('../config/swagger');
const { reqLog } = require('../api/middlewares');
/**
 * Restify server with common configuration for REST Apis.
 *
 * @param {Object} opts - options for the Express server
 * @param {Object} logger
 * @returns {*|Server}
 */
const restServer = (opts, logger) => {
  const i18n = require('./../i18n/i18n')
  const server = express();

  server.use(bodyParser.json());
  server.use(i18n);
  server.use(bodyParser.urlencoded({ extended: false }));
  server.use(cors());

  server.use("/api", reqLog);
  
  const specs = swaggerJsdoc(swagger);
  server.use(
    "/api-docs",
    swaggerUi.serve,
    swaggerUi.setup(specs, { explorer: true })
  );

  process.on('uncaughtException', (error) => {
    logger.error('Error: %s', error);
    if (error.stack) {
      logger.error(error.stack);
    }
  });
  server.use(express.static(resolve(__dirname, '../../apidocs')));
  return server;
};

module.exports = restServer;
