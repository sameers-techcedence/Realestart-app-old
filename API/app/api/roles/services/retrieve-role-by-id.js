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
    const { header: { lang }, rolesData: { RoleID } } = req;
    const rolesData = await roles.findOne({ where: { RoleID } });
    res.body = {
      message: messages('roleRetrivedSuccessfully', lang),
      data: rolesData,
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
