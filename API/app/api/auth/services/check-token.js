/* eslint-disable prefer-destructuring */
const logger = require('../../../logger');
const { generateErrorObject, notFound } = require('../../../commons/response-format');
const { messages } = require('../../../commons');
const { users } = require('../../../database/database-connection');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    let { params: { token } } = req;

    const exist = await users.findOne({ where: { PasswordToken: token } });
    if (exist) {
        res.body = {
            message: "success",
            data: { user : exist.Email },
        };
    } else {
      const error = generateErrorObject('PasswordToken', messages('invalidResetToken'), 'params');
      notFound(req, res, error);
    }
    next();
  } catch (error) {
    logger.error(`Error while processing request ${req}`);
    next(error);
  }
};

