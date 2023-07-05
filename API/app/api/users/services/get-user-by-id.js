const logger = require('../../../logger');
const db = require('../../../database/database-connection');

const { users, roles } = db;
const { messages } = require('../../../commons');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    const { header: { lang }, user: { UserID } } = req;
    const userData = await users.findAndCountAll({
      include: {
        model: roles,
        attributes: ['RoleID','RoleNameInEn'],
        as: 'roles',
      },
      where: {
        UserID,
      },
    });
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
