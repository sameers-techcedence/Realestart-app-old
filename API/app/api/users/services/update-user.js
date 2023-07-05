const logger = require('../../../logger');
const db = require('../../../database/database-connection');

const { users } = db;
const { messages } = require('../../../commons');
const { encryptPassword } = require('../../../utill/util');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    const { header: { lang }, body: { firstName, lastName,
      mobile, password }, params: { userId }, user: { PasswordSalt }, tokenUser: { UserID } } = req;
    const updateObj = {
      FirstName: firstName,
      LastName: lastName,
      FullName: firstName+' '+lastName,
      Mobile: mobile,
      UpdatedBy: UserID,
    };
    updateObj.Password = encryptPassword(password, PasswordSalt);
    await users.update(updateObj, { where: { UserID: userId } });
    res.body = {
      message: messages('updateUserSuccess', lang),
    };
    req.UserID = userId;
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
