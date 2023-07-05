const logger = require('../../../logger');
const db = require('../../../database/database-connection');

const { roles, roleFunctions } = db;
const { messages } = require('../../../commons');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    const { header: { lang }, params: { roleId } } = req;
    await roles.destroy({ where: { RoleID: roleId } });
    roleFunctions.destroy({ where: { RoleID: roleId } });
    res.body = {
      message: messages('deleteRoleSuccess', lang),
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
