/* eslint-disable prefer-destructuring */
const _ = require('lodash');
const logger = require('../../logger');
const db = require('../../database/database-connection');
const { generateErrorObject, notFound } = require('../../commons/response-format');
const { messages } = require('../../commons');

const { users } = db;

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    let { params: { userId } } = req;

    if (_.isEmpty(userId)) {
      const { body: { userId: temp } } = req;
      userId = temp;
    }
    if (_.isEmpty(userId)) {
      const { query: { userId: temp } } = req;
      userId = temp;
    }
    const usersData = await users.findOne({ where: { UserID: userId } });
    if (!_.isUndefined(usersData) && !_.isEmpty(usersData) && !_.isNull(usersData)) {
      req.user = usersData;
      req.userExist = true;
    } else {
      req.userExist = false;
      const error = generateErrorObject('userId', messages('userNotFound'), 'body');
      notFound(req, res, error);
      return;
    }
    next();
  } catch (error) {
    logger.error(`Error while processing request ${req}`);
    next(error);
  }
};
