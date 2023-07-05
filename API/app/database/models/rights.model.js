module.exports = (sequelize, Sequelize) => {
  const Rights = sequelize.define('Rights', {
    RightID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    RightNameInEn: {
      type: Sequelize.TEXT,
    },  
    RightSlug: {
      type: Sequelize.TEXT,
    },
    RightDescription: {
      type: Sequelize.TEXT,
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

  return Rights;
};
