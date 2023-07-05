const logger = require('../../../logger');
const db = require('../../../database/database-connection');
const { messages } = require('../../../commons');

const { roles } = db;

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    const { body: { roleNameInEn, isActive },
      params: { roleId }, tokenUser: { UserID } } = req;
    const updateObj = {
      RoleNameInEn: roleNameInEn,
      IsActive: (isActive) ? 1 : 0,
      // IsActive: (isActive),
      UpdatedBy: UserID,
    };
    await roles.update(updateObj, { where: { RoleID: roleId } });
    res.body = {
      message: messages('updateRoleSuccess'),
      data: roleId,
    };
    // req.RoleID = roleId;
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
