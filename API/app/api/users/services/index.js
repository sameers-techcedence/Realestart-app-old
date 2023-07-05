const addUser = require(__dirname +'/add-users');
const retrieveUsers = require(__dirname +'/retrieve-users');
const updateUser = require(__dirname +'/update-user');
const deleteUser = require(__dirname +'/delete-user');
const activateuser = require(__dirname +'/activate-user');
const userRoleMap = require(__dirname +'/user-role-map');
const updateUserRoleMap = require(__dirname +'/update-user-role-map');
const getUserById = require(__dirname +'/get-user-by-id');
module.exports = {
  addUser,
  retrieveUsers,
  updateUser,
  deleteUser,
  activateuser,
  userRoleMap,
  updateUserRoleMap,
  getUserById
};
