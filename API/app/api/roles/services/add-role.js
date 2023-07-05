const logger = require('../../../logger');
const db = require('../../../database/database-connection');

const { roles } = db;
const { messages } = require('../../../commons');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  const { body: { roleNameInEn }, tokenUser: { UserID } } = req;
  try {
    const role = {
      RoleNameInEn: roleNameInEn,
      IsActive: 1,
      CreatedBy: UserID,
      UpdatedBy: UserID,
    };
    const rolesData = await roles.create(role);
    res.body = {
      message: messages('roleAddedSuccessfully'),
      data: rolesData,
    };
    // req.rolesData = rolesData;
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
