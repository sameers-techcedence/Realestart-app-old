const logger = require('../../../logger');
const db = require('../../../database/database-connection');

const { templates } = db;
const { messages } = require('../../../commons');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    const { header: { lang }, params: { templateId } } = req;

    const userData = await templates.destroy({ where: { TemplatId: templateId } });
    res.body = {
      message: messages('deleteEmailTemplateSuccess', lang),
      data: userData,
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
