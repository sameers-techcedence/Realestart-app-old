/* eslint-disable prefer-const */
const logger = require('../../../logger');
const { Format: { badRequestValue, generateErrorObject, notFound }, messages, config: { url, salt: { payloadSalt }, auth: { token: { secret } } } } = require('../../../commons');
const crypto = require('crypto');
const { templates, users } = require('../../../database/database-connection');
const { sendEmail } = require('../../../utill/email');
const { EMAIL_TYPE: { FORGOT_PASSWORD } } = require('../../../utill/constants');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    const { email } = req.params;
    const usersData = await users.findOne({ where: { Email: email } });
    if (!usersData) {
      const message = messages('userNotFound');
      const error = generateErrorObject('email', message, 'body');
      notFound(req, res, error);
      return;
    }
    const { FirstName: firstName, LastName: lastName } = usersData;
    let template = await templates.findOne({where:{ Slug: FORGOT_PASSWORD }});
    if(!template){
      const error = generateErrorObject(FORGOT_PASSWORD, messages('mailTemplateNotFound'), 'query');
      badRequestValue(req, res, error);
      return;
    }
    let token = crypto.randomBytes(64).toString('base64').replace(/\//g,'_').replace(/\+/g,'-');
    usersData.update({
      PasswordToken : token,
      UpdatedBy : usersData.UserID,
      PasswordTokenCreatedAt : new Date()
    });
    let { TextEn, SubjectEn } = template;
    let text = TextEn;
    let subject = SubjectEn;
    const link = `${url}password-reset/${encodeURIComponent(token)}/${email}`;
    text = text.replace('[fullname]', `${firstName} ${lastName}`);
    text = text.replace('[link]', `${link}`);
    await sendEmail(email, subject, text);
    const data = {
      email,
    };
    res.body = {
      message: messages('resetPasswordLinkSuccess'),
      data,
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
