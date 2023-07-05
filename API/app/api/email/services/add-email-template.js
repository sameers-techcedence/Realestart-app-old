const logger = require('../../../logger');
const { messages } = require('../../../commons');
const db = require('../../../database/database-connection');
const { badRequestValue, generateErrorObject } = require('../../../commons/response-format');

const { templates } = db;

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 */

module.exports = async (req, res, next) => {
  const { body: { SubjectEn, TextEn, Slug }, tokenUser: { UserID } } = req;
  try {
    const template = {
      SubjectEn : SubjectEn, 
      TextEn : TextEn, 
      Slug : Slug,
      CreatedBy: UserID,
      UpdatedBy: UserID
    };
    const checkExist = await templates.count({
      where: {
        Slug : Slug,
      },
    });
    if(checkExist){
      const error = generateErrorObject('Slug', messages('slugAlreadyExist'), 'body');
      badRequestValue(req, res, error);
      return;
    }
    templates.create(template);
    res.body = {
      message: messages('emailTemplateAdded'),
      data: template,
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
