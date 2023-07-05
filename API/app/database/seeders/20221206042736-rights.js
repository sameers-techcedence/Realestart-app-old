'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
     await queryInterface.bulkInsert('rights', [
      {
        RightID : 1,
        RightNameInEn: 'User Management',
        RightSlug: 'usermanagement',
        RightDescription: null,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        RightID : 2,
        RightNameInEn: 'Role Management',
        RightSlug: 'rolemanagement',
        RightDescription: null,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        RightID : 3,
        RightNameInEn: 'Email Template Management',
        RightSlug: 'emailtemplatemanagement',
        RightDescription: null,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        RightID : 4,
        RightNameInEn: 'Dashboard',
        RightSlug: 'dashboard',
        RightDescription: null,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      }
    ], 
    {
        fields:["RightID", "RightNameInEn", "RightSlug", "RightDescription","CreatedBy", "UpdatedBy", "CreatedAt", "UpdatedAt"] ,
        updateOnDuplicate: ["RightNameInEn", "RightSlug", "RightDescription", "UpdatedBy", "UpdatedAt"] 
    });
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
     await queryInterface.bulkDelete('rights', null, {});
  }
};
