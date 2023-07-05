const express = require('express');
const { authValidation } = require('./validation');
const { checkSchema } = require('express-validator/check');
const { authValidationSchema: { authSchema, resetPasswordSchema, registerSchema } } = require('./validation/auth-schema');
const { success } = require('../../commons/response-format');
const { validateUser, generateToken, forgotPasswordSendEmail, resetPassword, registerAgent, checkPasswordToken } = require('./services');
const { checkEmailExist } = require('../middlewares');

const router = express.Router();

router.post('/login', checkSchema(authSchema), authValidation, checkEmailExist, validateUser, generateToken, success);
router.post('/register', checkSchema(registerSchema), authValidation, checkEmailExist, registerAgent, success);
router.get('/forgotPassword/:email', checkEmailExist, forgotPasswordSendEmail, success);
router.get('/password/token/:token', checkPasswordToken, success);
router.post('/resetPassword', checkSchema(resetPasswordSchema), authValidation, resetPassword, success);

module.exports = router;
