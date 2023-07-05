const jwt = require('jsonwebtoken');
const logger = require('../../logger');
const _ = require('lodash');
const { auth: { token: { secret } } } = require('../../commons/config');
const { messages } = require('../../commons');
const { generateErrorObject, unAuthorized } = require('../../commons/response-format');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */

module.exports = async (req, res, next) => {
  try {
    const token = req.header('access-token');
    if (_.isUndefined(token) || _.isNull(token) || _.isEmpty(token)) {
      return res.status(403).json({ message: messages('emptyAccessToken') });
    }
    const decoded = jwt.verify(token, secret);
    req.tokenUser = decoded.user;
    next();
  } catch (error) {
    logger.error(`Error while validate user for : ${error}`);
    const message = messages('unauthorizedAccess');
    unAuthorized(req, res, generateErrorObject('email', message, 'body'));
  }
};
