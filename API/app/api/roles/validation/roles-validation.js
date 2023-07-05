const { validationResult } = require('express-validator/check');
const { Format: { badRequest } } = require('../../../commons');

const logger = require('../../../logger');

/**
 * User Schema Validator.
 * If error then return badRequest with error object otherwise call next middleware.
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = (req, res, next) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      badRequest(req, res, errors);
      return;
    }
  } catch (error) {
    logger.error(error);
    next(error);
  }
  next();
};
