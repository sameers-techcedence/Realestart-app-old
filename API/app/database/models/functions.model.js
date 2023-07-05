module.exports = (sequelize, Sequelize) => {
  const Functions = sequelize.define('Functions', {
    FunctionID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    FunctionNameInEn: {
      type: Sequelize.TEXT,
    },
    OrderNo: {
      type: Sequelize.INTEGER,
    },
    FunctionSlug: {
      type: Sequelize.STRING,
    },    
    RightID: {
      type: Sequelize.INTEGER,
      references: {
        model: 'rights', 
        key: 'RightID', 
      }
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

  return Functions;
};
