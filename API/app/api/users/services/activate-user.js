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
    const { header: { lang }, body: { isActive },
      params: { userId }, tokenUser: { UserID } } = req;
    const updateObj = {
      IsActive: (isActive)?1:0,
      UpdatedBy : UserID
    };
    await users.update(updateObj, { where: { UserID: userId } });
    res.body = {
      message: (!isActive) ? messages('userDeactivate', lang) : messages('userActivate', lang),
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
