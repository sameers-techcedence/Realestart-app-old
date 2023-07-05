'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('userrolesmappings', [
      {
        UserRolesMappingID : 1,
        UserID: 1,
        RoleID: 1,
        CreatedBy: 1,
        CreatedAt: new Date(),
      }
    ], 
    {
        fields:["UserRolesMappingID", "UserID", "RoleID", "CreatedBy", "CreatedAt"] ,
        updateOnDuplicate: ["UserID", "RoleID"] 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('userrolesmappings', null, {});
  }
};
