const messagesEn = require('./json/messages-en.json');
const messagesAr = require('./json/messages-en.json');
/**
   *
   * enMessages
   *
   * @param  {Object} key
   */
const enMessages = key => (messagesEn[key]);
/**
   *
   * arMessages
   *
   * @param  {Object} key
   */
const arMessages = key => (messagesAr[key]);

module.exports = (key, locale = 'en') => {
  switch (locale) {
    case 'en':
      return enMessages(key);
    default:
      return arMessages(key);
  }
};
