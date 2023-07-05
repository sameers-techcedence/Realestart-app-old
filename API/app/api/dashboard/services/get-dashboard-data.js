const logger = require('../../../logger');
const { messages } = require('../../../commons');
const { sequelize, queryTypes } = require('../../../database/database-connection');

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */

module.exports = async (req, res, next) => {
  try {
    const lang = req.header('lang');

    res.body = {
      message: messages('Dashboard Profile Retreived successfully', lang),
      data: [],
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
