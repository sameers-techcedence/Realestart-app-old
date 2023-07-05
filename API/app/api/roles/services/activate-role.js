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
  try {
    const { header: { lang }, body: { isActive },
      params: { roleId }, tokenUser: { UserID } } = req;
    const updateObj = {
      IsActive: (isActive)?1:0,
      UpdatedBy : UserID
    };
    await roles.update(updateObj, { where: { RoleID: roleId } });
    res.body = {
      message: (!isActive) ? messages('roleDeactivate', lang) : messages('roleActivate', lang),
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
