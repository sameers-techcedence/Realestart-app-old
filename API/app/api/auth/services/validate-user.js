/* eslint-disable camelcase */
const _ = require('lodash');
const logger = require('../../../logger');
const db = require('../../../database/database-connection');
const { Format: { generateErrorObject, unAuthorized }, messages } = require('../../../commons');
const { encryptPassword } = require('../../../utill/util');
const { notFound } = require('../../../commons/response-format');

const { users } = db;


/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  const { body: { email, password }, userExist } = req;
  try {
    if (!userExist) {
      logger.error(messages('userNotFound'));
      const error = generateErrorObject('userId', messages('userNotFound'), 'params');
      notFound(req, res, error);
      return;
    }

    users.findOne({ where: { Email: email } }).then(async (user) => {
      if (!_.isUndefined(user) && !_.isNull(user)) {
        const { PasswordSalt } = user;
        const dbPassword = encryptPassword(password, PasswordSalt);
        if (_.isEqual(dbPassword, user.Password)) {
          req.body.message = messages('loginSuccessful');
          if (user.IsActive === 0) {
            const message = messages('userAccess');
            const error = generateErrorObject('email', message, 'body');
            unAuthorized(req, res, error);
          }
          next();
        } else {
          const message = messages('LoginFailed');
          const error = generateErrorObject('email', message, 'body');
          unAuthorized(req, res, error);
        }
      }
    }).catch((err) => {
      logger.error(`Error while validate user for : ${email}`);
      next(err);
    });
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
