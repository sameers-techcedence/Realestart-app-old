const logger = require('../../../logger');
const AdminsRto = require('../rto/roles.rto');
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
    const lang = req.header('lang');
    const rolesData = await roles.findAll();
    const transformedCards = rolesData.map((Roles) => {
      return new AdminsRto(lang, Roles.dataValues)
    })
    res.body = {
      message: messages('rolesRetrivedSuccessfully', lang),
      data: transformedCards,
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
