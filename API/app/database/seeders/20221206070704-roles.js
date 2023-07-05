'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('roles', [
      {
        RoleID : 1,
        RoleNameInEn : 'Admin',
        IsActive: 1,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        RoleID : 2,
        RoleNameInEn : 'Employee',
        IsActive: 1,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        RoleID : 3,
        RoleNameInEn : 'Agent',
        IsActive: 1,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      }
    ], 
    {
        fields:["RoleID", "RoleNameInEn", "IsActive", "UpdatedBy", "UpdatedAt", "CreatedBy" , "CreatedAt"] ,
        updateOnDuplicate: ["RoleNameInEn", "IsActive", "UpdatedBy", "UpdatedAt"] 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('roles', null, {});
  }
};
