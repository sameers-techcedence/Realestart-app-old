'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    queryInterface.sequelize.query(`
    CREATE PROCEDURE GetMenuItems () 

SELECT 
CONCAT(
  '[',
  GROUP_CONCAT(
    JSON_OBJECT(
      'MenuItemID', MenuItemID,
      'MenuItemSlug', MenuItemSlug,
      'MenuItemNameInEn', MenuItemNameInEn,
      'RightID', RightID,
      'TargetURL', TargetURL,
      'TargetClass', TargetClass,
      'OrderNo', OrderNo,
      'HasSubMenu', HasSubMenu,
      'SubMenu', SubMenu
    )
  ),
  ']'
) AS MenuObject
FROM (
SELECT MI1.MenuItemID,MI1.MenuItemSlug,MI1.MenuItemNameInEn,MI1.RightID,MI1.TargetURL,MI1.TargetClass,MI1.OrderNo,IF(MI2.ParentMenuID IS NULL,0,1) AS HasSubMenu, 1 As GroupKey,
CONCAT(
  '[',
  GROUP_CONCAT(
    JSON_OBJECT(
      'MenuItemID', MI2.MenuItemID,
      'ParentMenuID', MI2.ParentMenuID,
      'MenuItemSlug', MI2.MenuItemSlug,
      'MenuItemNameInEn', MI2.MenuItemNameInEn,
      'OrderNo', MI2.OrderNo,
      'RightID', MI2.RightID,
      'TargetURL', MI2.TargetURL,
      'TargetClass', MI2.TargetClass       
    )
    ORDER BY MI2.OrderNo ASC
  ),
  ']'
) AS SubMenu
FROM menuitems MI1
LEFT JOIN menuitems MI2 ON MI1.MenuItemID = MI2.ParentMenuID
WHERE MI1.ParentMenuID = 0
GROUP BY MI1.MenuItemID
ORDER BY MI1.OrderNo ASC
) AS MenuItems GROUP BY GroupKey;
    `);
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
    queryInterface.sequelize.query("DROP PROCEDURE IF EXISTS `GetMenuItems`");
  }
};
