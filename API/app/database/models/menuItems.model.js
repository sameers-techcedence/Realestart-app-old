module.exports = (sequelize, Sequelize) => {
  const MenuItems = sequelize.define('MenuItems', {
    MenuItemID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    ParentMenuID: {
      type: Sequelize.INTEGER,
    },    
    MenuItemSlug: {
      type: Sequelize.TEXT,
    },
    MenuItemNameInEn: {
      type: Sequelize.TEXT,
    },
    RightID: {
      type: Sequelize.INTEGER,
      references: {
        model: 'rights', 
        key: 'RightID', 
     }
    }, 
    TargetURL: {
      type: Sequelize.TEXT,
    },   
    TargetClass: {
      type: Sequelize.TEXT,
    }, 
    OrderNo: {
      type: Sequelize.INTEGER,
    },  
    DisplayInMenu: {
      type: Sequelize.INTEGER,
    },               
    createdAt: {
      type: Sequelize.DATE,
      field: 'CreatedAt',
    },
    CreatedBy: {
      type: Sequelize.INTEGER,
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'UpdatedAt',
    },
    UpdatedBy: {
      type: Sequelize.INTEGER,
    },
  });

  return MenuItems;
};
