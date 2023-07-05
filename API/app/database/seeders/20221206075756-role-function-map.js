'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('rolefunctionmappings', [
      {
        RoleFunctionMappingID : 1,
        RoleID: 1,
        FunctionID: 1,
        CreatedBy: 1,
        CreatedAt: new Date(),
      },
      {
        RoleFunctionMappingID : 2,
        RoleID: 1,
        FunctionID: 2,
        CreatedBy: 1,
        CreatedAt: new Date(),
      },
      {
        RoleFunctionMappingID : 3,
        RoleID: 1,
        FunctionID: 3,
        CreatedBy: 1,
        CreatedAt: new Date(),
      },
      {
        RoleFunctionMappingID : 4,
        RoleID: 1,
        FunctionID: 4,
        CreatedBy: 1,
        CreatedAt: new Date(),
      },
      {
        RoleFunctionMappingID : 5,
        RoleID: 1,
        FunctionID: 5,
        CreatedBy: 1,
        CreatedAt: new Date(),
      },
      {
        RoleFunctionMappingID : 6,
        RoleID: 1,
        FunctionID: 6,
        CreatedBy: 1,
        CreatedAt: new Date(),
      },
      {
        RoleFunctionMappingID : 7,
        RoleID: 1,
        FunctionID: 7,
        CreatedBy: 1,
        CreatedAt: new Date(),
      },
      {
        RoleFunctionMappingID : 8,
        RoleID: 1,
        FunctionID: 8,
        CreatedBy: 1,
        CreatedAt: new Date(),
      },
      {
        RoleFunctionMappingID : 9,
        RoleID: 1,
        FunctionID: 9,
        CreatedBy: 1,
        CreatedAt: new Date(),
      },
      {
        RoleFunctionMappingID : 10,
        RoleID: 1,
        FunctionID: 10,
        CreatedBy: 1,
        CreatedAt: new Date(),
      },
      {
        RoleFunctionMappingID : 11,
        RoleID: 1,
        FunctionID: 11,
        CreatedBy: 1,
        CreatedAt: new Date(),
      },
      {
        RoleFunctionMappingID : 12,
        RoleID: 1,
        FunctionID: 12,
        CreatedBy: 1,
        CreatedAt: new Date(),
      },
      {
        RoleFunctionMappingID : 13,
        RoleID: 1,
        FunctionID: 13,
        CreatedBy: 1,
        CreatedAt: new Date(),
      },
      {
        RoleFunctionMappingID : 14,
        RoleID: 1,
        FunctionID: 14,
        CreatedBy: 1,
        CreatedAt: new Date(),
      }
    ], 
    {
        fields:["RoleFunctionMappingID", "RoleID", "FunctionID", "CreatedBy" , "CreatedAt"] ,
        updateOnDuplicate: ["RoleID", "FunctionID"] 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('rolefunctionmappings', null, {});
  }
};
