module.exports = (sequelize, Sequelize) => {
  const UserRolesMappings = sequelize.define('UserRolesMappings', {
    UserRolesMappingID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    UserID: {
      type: Sequelize.INTEGER,
      references: {
        model: 'users', 
        key: 'UserID', 
     }
    },
    RoleID: {
      type: Sequelize.INTEGER,
      references: {
        model: 'roles', 
        key: 'RoleID', 
     }
    },
    createdAt: {
      field: 'CreatedAt',
      type: Sequelize.DATE,
    },
    CreatedBy: {
      type: Sequelize.INTEGER,
    },
  },{
    updatedAt: false
});
  
  return UserRolesMappings;
};
