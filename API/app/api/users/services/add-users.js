const logger = require('../../../logger');
const db = require('../../../database/database-connection');

const { users } = db;
const { generateRandomSring, encryptPassword } = require('../../../utill/util');
const { messages } = require('../../../commons');
const { generateErrorObject, conflict } = require('../../../commons/response-format');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  const { body: { firstName, lastName, email, password,
    mobile }, userExist, tokenUser: { UserID } } = req;
  if (userExist) {
    logger.error(messages('userExists'));
    const error = generateErrorObject('email', messages('userExists'), 'params');
    conflict(req, res, error);
    return;
  }
  const passwordSalt = generateRandomSring(64);
  try {
    const user = {
      FirstName: firstName,
      LastName: lastName,
      FullName: firstName+' '+lastName,
      Email: email,
      PasswordSalt: passwordSalt,
      IsActive: true,
      CreatedBy: UserID,
      UpdatedBy: UserID,
      Mobile: mobile,
    };
    user.Password = encryptPassword(password, passwordSalt);
    const userData = await users.create(user);
    res.body = {
      message: messages('User created successfully'),
      data: userData,
    };
    req.UserID = userData.UserID;
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
