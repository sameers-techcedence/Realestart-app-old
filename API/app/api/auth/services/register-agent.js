/* eslint-disable prefer-const */
const logger = require('../../../logger');
const { generateErrorObject, conflict } = require('../../../commons/response-format');
const { messages } = require('../../../commons');
const { generateRandomSring, encryptPassword } = require('../../../utill/util');
const jwt = require('jsonwebtoken');
const db = require('../../../database/database-connection');
const { users, userRoles } = db;

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    const { userExist } = req;
    if (userExist) {
        const error = generateErrorObject('email', messages('userExists'), 'params');
        conflict(req, res, error); // statusCode = 409
        return;
    }
    const { email, firstName, lastName, mobile, companyName, agentLicenceNo, password } = req.body;
    const passwordSalt = generateRandomSring(64);
    let user = { 
        Email: email, 
        FirstName: firstName, 
        LastName: lastName, 
        FullName: firstName+' '+lastName,
        Mobile:mobile,
        CompanyName:companyName, 
        AgentLicenceNo:agentLicenceNo,
        PasswordSalt:passwordSalt
    };
    user.Password = encryptPassword(password, passwordSalt);
    const userData = await users.create(user);
    const userRoleObj = {
      RoleID: 3,
      UserID: userData.UserID,
      CreatedBy: userData.UserID
    };
    userRoles.create(userRoleObj);
    res.body = {
      message: messages('agentRegistrationSuccess'),
      data:userData,
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
