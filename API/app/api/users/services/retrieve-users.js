const logger = require('../../../logger');
const db = require('../../../database/database-connection');

const { users } = db;
const { messages } = require('../../../commons');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    const { header: { lang } } = req;
    const userData = await users.findAll();
    res.body = {
      message: messages('userRetrivedSuccessfully', lang),
      data: userData,
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
