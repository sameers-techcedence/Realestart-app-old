const express = require('express');
const { checkSchema } = require('express-validator/check');
const { created, success } = require('../../commons/response-format');
const { checkEmailExist, checkUserExist, checkRoleExist, checkAccess, validateToken } = require('../middlewares');
const { usersValidation } = require('./validation');

const { usersValidationSchema: { addUserSchema, updateUserSchema, updateStatusSchema } } = require('./validation/users-schema');
const { addUser, retrieveUsers, updateUser, deleteUser, userRoleMap, updateUserRoleMap, getUserById } = require('./services');
const activateUser = require('./services/activate-user');
const { ACCESS } = require('../../utill/constants');

const router = express.Router();

const multer = require('multer');

const storage = multer.diskStorage({
  destination: './src/uploads/',
  filename: (req, file, cb) => cb(null, `${file.originalname}`),
});

const upload = multer({
  storage,
});

router.post(
  '/', checkSchema(addUserSchema), usersValidation, (req, res, next) => {
    req.operation = ACCESS.ADD_USER; next();
  }, validateToken, checkEmailExist, checkAccess, checkRoleExist,
  addUser, userRoleMap, created,
);
router.get('/:userId', validateToken, checkUserExist, getUserById, success);
router.get('/', validateToken, retrieveUsers, success);
router.put('/status/:userId', checkSchema(updateStatusSchema), usersValidation, (req, res, next) => {
  req.operation = ACCESS.UPDATE_USER; next();
}, validateToken, checkUserExist, checkAccess, activateUser, success);
router.put('/:userId', checkSchema(updateUserSchema), usersValidation, (req, res, next) => {
  req.operation = ACCESS.UPDATE_USER; next();
}, validateToken, checkUserExist, checkAccess, checkRoleExist, updateUser, updateUserRoleMap, success);
router.delete('/:userId', validateToken, checkUserExist, deleteUser, success);

module.exports = router;
