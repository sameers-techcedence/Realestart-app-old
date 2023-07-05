/* eslint-disable prefer-destructuring */
const _ = require('lodash');
const logger = require('../../logger');
const db = require('../../database/database-connection');
const { generateErrorObject, notFound } = require('../../commons/response-format');
const { messages } = require('../../commons');

const { roles } = db;

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    let { params: { roleId } } = req;

    if (_.isUndefined(roleId)) {
      const { body: { roleId: temp } } = req;
      roleId = temp;
    }
    if (_.isUndefined(roleId)) {
      const { query: { roleId: temp } } = req;
      roleId = temp;
    }
    const rolesData = await roles.findOne({ where: { RoleID: roleId } });
    if (!_.isUndefined(rolesData) && !_.isEmpty(rolesData) && !_.isNull(rolesData)) {
      req.rolesData = rolesData;
    } else {
      const error = generateErrorObject('roleId', messages('roleNotFound'), 'body');
      notFound(req, res, error);
      return;
    }
    next();
  } catch (error) {
    logger.error(`Error while processing request ${req}`);
    next(error);
  }
};
