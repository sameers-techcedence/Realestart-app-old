const addRole = require(__dirname +'/add-role');
const retrieveRoles = require(__dirname +'/retrieve-roles');
const updateRole = require(__dirname +'/update-role');
const deleteRole = require(__dirname +'/delete-role');
const activateRole = require(__dirname +'/activate-role');
const retrieveFunctions = require(__dirname +'/retrieve-function');
const roleFunctionMap = require(__dirname +'/role-function-map');
const updateRoleFunctionMap = require(__dirname +'/update-role-function-map');
const retrieveRoleById = require(__dirname +'/retrieve-role-by-id');
const paginateRoles = require(__dirname +'/paginate-roles');
const allRoles = require(__dirname +'/all-roles');
module.exports = {
  addRole,
  retrieveRoles,
  updateRole,
  deleteRole,
  activateRole,
  roleFunctionMap,
  retrieveFunctions,
  updateRoleFunctionMap,
  retrieveRoleById,
  paginateRoles,
  allRoles,
};
