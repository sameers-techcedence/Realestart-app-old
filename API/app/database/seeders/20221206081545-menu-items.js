'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('menuitems', [
      {
        MenuItemID : 1,
        ParentMenuID: 0,
        MenuItemSlug: 'dashboard',
        MenuItemNameInEn : 'Dashboard',
        RightID: 4,
        TargetURL: '/dashboard',
        TargetClass : 'ri-dashboard-2-line',
        OrderNo: 1,
        DisplayInMenu: 1,
        CreatedBy: 1,
        UpdatedAt: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        MenuItemID : 2,
        ParentMenuID: 0,
        MenuItemSlug: 'usermgt',
        MenuItemNameInEn : 'User Management',
        RightID: 1,
        TargetURL: '/user/list',
        TargetClass : 'ri-team-line',
        OrderNo: 2,
        DisplayInMenu: 1,
        CreatedBy: 1,
        UpdatedAt: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        MenuItemID : 3,
        ParentMenuID: 0,
        MenuItemSlug: 'rolemgt',
        MenuItemNameInEn : 'Role Management',
        RightID: 2,
        TargetURL: '/role/list',
        TargetClass : 'ri-team-line',
        OrderNo: 3,
        DisplayInMenu: 1,
        CreatedBy: 1,
        UpdatedAt: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      },
      {
        MenuItemID : 4,
        ParentMenuID: 0,
        MenuItemSlug: 'mailtemplatemgt',
        MenuItemNameInEn : 'Mail Template Management',
        RightID: 3,
        TargetURL: '/mailtemplate/list',
        TargetClass : 'ri-team-line',
        OrderNo: 4,
        DisplayInMenu: 1,
        CreatedBy: 1,
        UpdatedAt: 1,
        CreatedAt: new Date(),
        UpdatedAt: new Date()
      }
    ], 
    {
        fields:[
          "MenuItemID", "ParentMenuID", "MenuItemSlug", 
          "MenuItemNameInEn", "RightID", "TargetURL", 
          "TargetClass", "OrderNo", "DisplayInMenu", 
          "UpdatedBy", "UpdatedAt", "CreatedBy", "CreatedAt"
        ],
        updateOnDuplicate: [
          "ParentMenuID", "MenuItemSlug", 
          "MenuItemNameInEn", "RightID", "TargetURL", 
          "TargetClass", "OrderNo", "DisplayInMenu", 
          "UpdatedBy", "UpdatedAt"
        ] 
    });
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('menuitems', null, {});
  }
};
