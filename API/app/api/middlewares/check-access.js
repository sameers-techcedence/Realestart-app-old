/* eslint-disable prefer-destructuring */
const _ = require('lodash');
const logger = require('../../logger');
const db = require('../../database/database-connection');
const { notFound, generateErrorObject } = require('../../commons/response-format');
const { messages } = require('../../commons');

const { roleFunctions, functions, userRoles } = db;

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    const { header: { lang }, operation, tokenUser: { UserID } } = req;
    const RoleIDs = await userRoles.findAll({ where: { UserID }, attributes: ['RoleID'],
    raw : true }).then(function(accounts) {
      return pluck(accounts, 'RoleID');
    });
    console.log(RoleIDs);
    const roleFunctionsData = await roleFunctions.findAll({ where: { RoleID:RoleIDs } });
    const data = await Promise.all(_.flatMap(roleFunctionsData, async (item) => {
      const { FunctionID } = item;
      const { FunctionNameInEn } =
      await functions.findOne({ where: { FunctionID } });
      return { FunctionNameInEn };
    }));
    if (!_.some(data, { FunctionNameInEn: operation })) {
      req.userExist = false;
      const error = generateErrorObject('userId', messages('notAccess', lang), 'body');
      notFound(req, res, error);
      return;
    }
    next();
  } catch (error) {
    logger.error(`Error while processing request ${req}`);
    next(error);
  }
};
