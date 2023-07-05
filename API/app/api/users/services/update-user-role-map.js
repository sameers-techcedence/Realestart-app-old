const logger = require('../../../logger');
const db = require('../../../database/database-connection');

const { userRoles } = db;
const { messages } = require('../../../commons');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  const { header: { lang }, UserID, tokenUser: { UserID :UpdatedBy}, rolesData } = req;
  try {
    const userRoleObj = {
      RoleID: rolesData.RoleID,
      UserID: UserID,
      CreatedBy: UpdatedBy
    };
    await userRoles.destroy({ where: { UserID } });
    userRoles.create(userRoleObj);
    res.body = {
      message: messages('updateUserSuccess', lang),
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
