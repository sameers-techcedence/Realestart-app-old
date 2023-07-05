const _ = require('lodash');
const jwt = require('jsonwebtoken');
const logger = require('../../../logger');
const {
  messages,
  Format: { generateErrorObject, unAuthorizedResetPwd, notFound, badRequestValue },
  config: {
    salt: { staticPasswordSalt, payloadSalt },
    auth: { token: { secret } },
  },
} = require('../../../commons');
const { users } = require('../../../database/database-connection');
const { decryptData, generateRandomSring, encryptPassword } = require('../../../utill/util');
/**
 * Reset Password for cognito user pool
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    let { body: { token, password, passwordConfirmation } } = req;
    const exist = await users.findOne({ where: { PasswordToken: token } });
    if(!exist) {
      const error = generateErrorObject('PasswordToken', messages('invalidResetToken'), 'params');
      badRequestValue(req, res, error);
    }

    const passwordSalt = generateRandomSring(64);
    let userData = {
      PasswordSalt: passwordSalt,
      UpdatedBy : exist.UserID,
      Password : encryptPassword(password, passwordSalt),
      PasswordToken : ''
    };

    await exist.update(userData);
    res.body = {
      message: messages('passwordResetSuccess'),
    };
    next();
  } catch (error) {
    logger.error(`Error while processing request ${error}`);
    next(error);
  }
};
