const logger = require('../../../logger');
const db = require('../../../database/database-connection');
const _ = require('lodash');

const { roleFunctions, functions } = db;
const { messages } = require('../../../commons');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  const { header: { lang }, body: { functions: functionArray },
    RoleID, tokenUser: { UserID } } = req;
  try {
    await roleFunctions.destroy({ where: { RoleID } });
    await Promise.all(_.flatMap(functionArray, async (item) => {
      const dataItem = await functions.findOne({ where: { FunctionID: item } });
      if (!_.isUndefined(dataItem) && !_.isEmpty(dataItem) && !_.isNull(dataItem)) {
        const { FunctionID } = dataItem;
        const roleFunction = {
          RoleID,
          FunctionID,
          IsActive: true,
          CreatedBy: UserID,
        };
        await roleFunctions.create(roleFunction);
      }
    }));
    res.body = {
      message: messages('updateRoleSuccess', lang),
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
