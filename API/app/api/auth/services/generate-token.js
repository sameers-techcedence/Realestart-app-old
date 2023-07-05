const jwt = require('jsonwebtoken');
const logger = require('../../../logger');
const { auth: { token: { tokenExpire, secret } } } = require('../../../commons/config');
const db = require('../../../database/database-connection');

const { users } = db;
/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  const { user, body: { message } } = req;
  try {
    const payload = {
      user,
    };
    const accessToken = jwt.sign(payload, secret, { expiresIn: tokenExpire });
    const userData = await users.update({
      UpdatedBy: req.user.UserID,
      LastSignIn:new Date().toISOString()
    }, { where: { UserID: req.user.UserID } });
    res.body = {
      accessToken,
      message,
      data: req.user,
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
