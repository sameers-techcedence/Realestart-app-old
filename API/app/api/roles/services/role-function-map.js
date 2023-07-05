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
    tokenUser: { UserID }, rolesData } = req;
  try {
    await Promise.all(_.flatMap(functionArray, async (item) => {
      const dataItem = await functions.findOne({ where: { FunctionID: item } });
      if (!_.isUndefined(dataItem) && !_.isEmpty(dataItem) && !_.isNull(dataItem)) {
        const { FunctionID } = dataItem;
        const roleFunction = {
          RoleID: rolesData.RoleID,
          FunctionID,
          IsActive: true,
          CreatedBy: UserID,
        };
        await roleFunctions.create(roleFunction);
      }
    }));
    res.body = {
      message: messages('roleAddedSuccessfully', lang),
      data: rolesData,
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
