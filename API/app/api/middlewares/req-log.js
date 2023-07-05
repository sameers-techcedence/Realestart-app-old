const jwt = require('jsonwebtoken');
const logger = require('../../logger');
const _ = require('lodash');
const { auth: { token: { secret } } } = require('../../commons/config');
const { generateErrorObject, unAuthorized } = require('../../commons/response-format');
const db = require('../../database/database-connection');
const { reqLogs } = db;

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */

module.exports = async (req, res, next) => {
  try {
    let UserID = null;
    let ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress;
    const token = req.header('access-token');
    if (!_.isUndefined(token) && !_.isNull(token) && !_.isEmpty(token)) {
        const decoded = jwt.verify(token, secret);
        UserID = decoded?.user?.UserID || null;
    }
    let logData = {
        CreatedBy : UserID,
        Method : req.method,
        Url : req.protocol + '://' + req.get('host') + req.originalUrl,
        Ip : ip,
        Headers : JSON.stringify(req.headers),
        Request : JSON.stringify(req.body),
    };
    res.on("finish", () => {
        logData.Response =  JSON.stringify(res.body);
        reqLogs.create(logData);
    });
    next();
  } catch (error) {
    logger.error(`Error while validate user for : ${error}`);
    unAuthorized(req, res, generateErrorObject('email', "unauthorizedAccess", 'body'));
  }
};
