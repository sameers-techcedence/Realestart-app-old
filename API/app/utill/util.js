const randomstring = require('randomstring');
const crypto = require('crypto');
const moment = require('moment');
const { salt: { staticPasswordSalt }, urlEncryptionAlgorithm: { algorithm } } = require('../commons/config');
const db = require('../database/database-connection');
const { actionHistory } = db;
const { LANGUAGE } = require('./constants');

module.exports = {
  /**
   *
   * Generate Random String
   *
   * @param  {number} number
   */
  generateRandomSring(number) {
    return randomstring.generate(number);
  },

  /**
   *
   * encrypt password Email
   *
   * @param  {Object} password
   * @param  {Object} passwordSalt
   */
  encryptPassword(password, passwordSalt) {
    return crypto.createHash('md5').update(password + passwordSalt + staticPasswordSalt).digest('hex');
  },

  /**
   *
   * encrypt Value
   *
   * @param  {Object} text
   */
  encryptValue(text) {
    const cipher = crypto.createCipher(algorithm, staticPasswordSalt);
    const encrypted = cipher.update(text, 'utf8', 'hex') + cipher.final('hex');
    return encrypted;
  },

  /**
   *
   * decrypt Value
   *
   * @param  {Object} text
   */
  decryptValue(text) {
    const decipher = crypto.createDecipher(algorithm, staticPasswordSalt);
    const decrypted = decipher.update(text, 'hex', 'utf8') + decipher.final('utf8');
    return decrypted;
  },

  /**
 * Returns the decrypted password using bcrypt
 *
 * @param  {string} eData - encryptedData
 * @param  {string} userSalt - user salt to hash
 * @param  {string} staticSalt - salt to hash
 */
  decryptData(eData, userSalt, staticSalt) {
    const decipher = crypto.createDecipheriv(algorithm, userSalt, staticSalt);
    const decrypted = decipher.update(eData, 'base64', 'utf8');
    return (decrypted + decipher.final('utf8'));
  },

  /**
 * Returns the encrypted password using bcrypt
 *
 * @param  {string} data - data
 * @param  {string} userSalt - user salt to hash
 */
  encryptData(data, userSalt) {
    const cipher = crypto.createCipheriv(algorithm, userSalt, staticPasswordSalt);
    let encrypted = cipher.update(data, 'utf8', 'base64');
    encrypted += cipher.final('base64');
    console.log('======', encrypted);
    return encrypted;
  },

  /**
   *
   * isURL(str) {
   *
   * @param  {Object} str
   */
  isURL(str) {
    const regexp = /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[A-Z/a-z\u00a1-\uffff0-9]-*)*[A-Z/a-z\u00a1-\uffff0-9]+)(?:\.(?:[A-Z/a-z\u00a1-\uffff0-9]-*)*[A-Z/a-z\u00a1-\uffff0-9]+)*(?:\.(?:[A-Z/a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
    if (regexp.test(str)) {
      return true;
    }
    return false;
  },

  /***
 *  Action History
 */
   async creatingActionsHistories ({  message,
    UserID,
    ActionID,
    LegalCaseID,
    CustomerID}){ 
    try {
      const log = {
        CustomerID,
        Message: message,
        ActionID,
        LegalCaseID,
        IsActive: true,
        UserID,
      };
      console.log(log);
      const actionData = await actionHistory.create(log);
      return actionData;
    } catch (error) {
      return error;
    }
  }
};

/**
  *
  * Get Unix Epoch
  *
  */
const getUnixEpoch = () => {
  const time = moment();
  return time.unix() * 1000;
};
// module.exports.checkLanguage = (lang = 'en') => lang === LANGUAGE;
module.exports.checkLanguage = (lang = 'en') => true;

module.exports.getUnixEpoch = getUnixEpoch;
module.exports.getUnixEpochWithAddSeconds = seconds => (getUnixEpoch() + seconds);

