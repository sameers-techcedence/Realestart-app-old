const express = require('express');

const { checkSchema } = require('express-validator/check');
const { success } = require('../../commons/response-format');
const { rolesValidation } = require('./validation');
const { rolesValidationSchema: { addRoleSchema, updateStatusSchema } } = require('./validation/role-schema');
//   const { rolesValidationSchema: { addRoleSchema, updateRoleSchema, updateStatusSchema } } = require('./validation/role-schema'); 
//  const { paginateRoles, addRole, retrieveRoles, updateRole, deleteRole, activateRole, roleFunctionMap, retrieveFunctions, updateRoleFunctionMap, retrieveRoleById } = require('./services');  
const { allRoles, paginateRoles, addRole, retrieveRoles, updateRole, deleteRole, activateRole, roleFunctionMap, retrieveFunctions, retrieveRoleById } = require('./services');
const checkRoleExist = require('../middlewares/check-role-exist');
const { ACCESS } = require('../../utill/constants');
const checkAccess = require('../middlewares/check-access');
const { validateToken } = require('../middlewares');

const router = express.Router();


// router.post('/', checkSchema(addRoleSchema), rolesValidation, (req, res, next) => {
//   req.operation = ACCESS.ADD_ROLE; next();
// }, validateToken, checkAccess, addRole, roleFunctionMap, created);

router.post('/', validateToken, addRole, success);
// created
router.get('/functions', retrieveFunctions, success);

router.get('/:roleId', checkRoleExist, retrieveRoleById, success);

router.get('/', validateToken, retrieveRoles, success);

router.post('/paginate', paginateRoles, success);

router.post('/all', allRoles, success);

router.put('/status/:roleId', checkSchema(updateStatusSchema), validateToken, rolesValidation, (req, res, next) => {
  req.operation = ACCESS.UPDATE_ROLE; next();
}, checkRoleExist, checkAccess, activateRole, success);

//--------------------
// router.put(
//   '/:roleId', checkSchema(updateRoleSchema), rolesValidation, (req, res, next) => {
//     req.operation = ACCESS.UPDATE_ROLE; next();
//   }, validateToken, checkRoleExist, checkAccess, updateRole,
//   updateRoleFunctionMap, success,
// );
//--------------------

router.put('/:roleId', validateToken, updateRole, success);

// router.delete('/:roleId', (req, res, next) => {
//   req.operation = ACCESS.REMOVE_ROLE; next();
// }, validateToken, checkRoleExist, checkAccess, deleteRole, success);

router.delete('/:roleId', validateToken, deleteRole, success);


module.exports = router;
