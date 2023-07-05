'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('users', [
      {
        UserID : 1,
        Email: 'admin@mailinator.com',
        Password: "0a9acf1118ecff6e1cc2449fc6b433a0",
        PasswordSalt: "6QcEUWpr9dgppnIjZWNuINCKsEVjqFLnLhlDEtNQopfH1awAhCDKs60s3MkUlCZV",
        FirstName: 'Admin',
        LastName: '',
        FullName: 'Admin',
        Mobile: "9988998888",
        IsActive: 1,
        CreatedBy: 1,
        UpdatedAt: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      }
    ], 
    {
        fields:["UserID", "Email", "Password", "PasswordSalt", "FirstName", "LastName", "FullName", "Mobile", "IsActive", "UpdatedBy", "UpdatedAt", "CreatedBy" , "CreatedAt"] ,
        updateOnDuplicate: ["Email", "Password", "PasswordSalt", "FirstName", "LastName", "FullName", "Mobile", "IsActive", "UpdatedBy", "UpdatedAt"] 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('users', null, {});
  }
};
