const logger = require('../../../logger');
const db = require('../../../database/database-connection');
const { badRequestValue, generateErrorObject } = require('../../../commons/response-format');

const { templates, Op } = db;
const { messages } = require('../../../commons');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    const { body: { SubjectEn, TextEn, Slug }, tokenUser: { UserID }, params: { templateId } } = req;
    const updateObj = {
      SubjectEn: SubjectEn,
      TextEn: TextEn,
      Slug: Slug,
      UpdatedBy: UserID,
    };
    const checkExist = await templates.count({
      where: {
        TemplatId: { [Op.ne]: templateId },
        Slug : Slug,
      },
    });
    if(checkExist){
      const error = generateErrorObject('Slug', messages('slugAlreadyExist'), 'body');
      badRequestValue(req, res, error);
      return;
    }
    templates.update(updateObj, { where: { TemplatId: templateId } });
    res.body = {
      message: messages('emailTemplateUpdated'),
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
