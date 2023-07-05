const validateUser = require(__dirname +'/validate-user.js');
const generateToken = require(__dirname +'/generate-token.js');
const forgotPasswordSendEmail = require(__dirname +'/fogot-password-send-mail.js');
const resetPassword = require(__dirname +'/reset-password.js');
const registerAgent = require(__dirname +'/register-agent.js');
const checkPasswordToken = require(__dirname +'/check-token.js');

module.exports = {
  validateUser,
  generateToken,
  forgotPasswordSendEmail,
  resetPassword,
  registerAgent,
  checkPasswordToken
};
