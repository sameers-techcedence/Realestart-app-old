const logger = require('../../../logger');
const db = require('../../../database/database-connection');

const { users, userRoles } = db;
const { messages } = require('../../../commons');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    const { header: { lang }, params: { userId } } = req;

    const userData = await users.destroy({ where: { UserID: userId } });
    userRoles.destroy({ where: { UserID: userId } });
    res.body = {
      message: messages('deleteUserSuccess', lang),
      data: userData,
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
