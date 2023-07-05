'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('functions', [
      {
        FunctionID : 1,
        FunctionNameInEn : 'View User',
        OrderNo: 1,
        FunctionSlug: 'view_user',
        RightID : 1,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        FunctionID : 2,
        FunctionNameInEn : 'Add User',
        OrderNo: 2,
        FunctionSlug: 'add_user',
        RightID : 1,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        FunctionID : 3,
        FunctionNameInEn : 'Update User',
        OrderNo: 3,
        FunctionSlug: 'update_user',
        RightID : 1,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        FunctionID : 4,
        FunctionNameInEn : 'Delete User',
        OrderNo: 4,
        FunctionSlug: 'delete_user',
        RightID : 1,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        FunctionID : 5,
        FunctionNameInEn : 'View Role',
        OrderNo: 1,
        FunctionSlug: 'view_role',
        RightID : 2,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        FunctionID : 6,
        FunctionNameInEn : 'Add Role',
        OrderNo: 2,
        FunctionSlug: 'add_role',
        RightID : 2,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        FunctionID : 7,
        FunctionNameInEn : 'Update Role',
        OrderNo: 3,
        FunctionSlug: 'update_role',
        RightID : 2,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        FunctionID : 8,
        FunctionNameInEn : 'Delete Role',
        OrderNo: 4,
        FunctionSlug: 'delete_role',
        RightID : 2,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        FunctionID : 9,
        FunctionNameInEn : 'View Email Template',
        OrderNo: 1,
        FunctionSlug: 'view_email_template',
        RightID : 3,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        FunctionID : 10,
        FunctionNameInEn : 'Add Email Template',
        OrderNo: 2,
        FunctionSlug: 'add_email_template',
        RightID : 3,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        FunctionID : 11,
        FunctionNameInEn : 'Update Email Template',
        OrderNo: 3,
        FunctionSlug: 'update_email_template',
        RightID : 3,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        FunctionID : 12,
        FunctionNameInEn : 'Delete Email Template',
        OrderNo: 4,
        FunctionSlug: 'delete_email_template',
        RightID : 3,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        FunctionID : 13,
        FunctionNameInEn : 'View Chart',
        OrderNo: null,
        FunctionSlug: 'view_chart',
        RightID : 4,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        FunctionID : 14,
        FunctionNameInEn : 'View Report',
        OrderNo: null,
        FunctionSlug: 'view_report',
        RightID : 4,
        CreatedBy: 1,
        UpdatedBy: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      }
    ], 
    {
        fields:["FunctionID", "FunctionNameInEn", "OrderNo", "FunctionSlug", "RightID", "UpdatedBy", "UpdatedAt", "CreatedBy" , "CreatedAt"] ,
        updateOnDuplicate: ["FunctionNameInEn", "OrderNo", "FunctionSlug", "RightID", "UpdatedBy", "UpdatedAt"] 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('functions', null, {});
  }
};
