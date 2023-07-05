module.exports = (sequelize, Sequelize) => {
  const RoleFunctionMappings = sequelize.define('RoleFunctionMappings', {
    RoleFunctionMappingID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    RoleID: {
      type: Sequelize.INTEGER,
      references: {
        model: 'roles', 
        key: 'RoleID', 
     }
    },
    FunctionID: {
      type: Sequelize.INTEGER,
      references: {
        model: 'functions', 
        key: 'FunctionID', 
     }
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'CreatedAt',
    },
    CreatedBy: {
      type: Sequelize.INTEGER,
    }
  },{
    updatedAt: false
});

  return RoleFunctionMappings;
};
