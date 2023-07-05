const _ = require('lodash');
const nodemailer = require('nodemailer');
const { smtp: { fromEmail, username, password, smtphost, smtpPort } } = require('../commons/config');


module.exports = {
  /**
   *
   * Send Email
   *
   * @param  {Object} email
   * @param  {Object} subject
   * @param  {Object} text
   */
  sendEmail(email, subject, text) {
    return new Promise(async (resolve, reject) => {
      if (!_.isUndefined(email) && !_.isUndefined(subject) && !_.isUndefined(text)) {
        const mailOptions = {
          from: fromEmail,
          to: email,
          subject,
          text,
          html: text,
        };

        try {
          const transporter = nodemailer.createTransport({
            host: smtphost,
            port: smtpPort,
            service: 'Gmail',
            auth: {
              user: username,
              pass: password,
            },
          });
          await transporter.sendMail(mailOptions);
          return resolve(true);
        } catch (error) {
          return reject({ message: `Error sending email: ${error} `, status: 500 });
        }
      }
    });
  },
};
