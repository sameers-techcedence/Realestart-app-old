module.exports = (sequelize, Sequelize) => {
  const Roles = sequelize.define('Roles', {
    RoleID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    RoleNameInEn: {
      type: Sequelize.TEXT,
    },
    IsActive: {
      type: Sequelize.INTEGER,
    },
    createdAt: {
      type: Sequelize.DATE,
      field: 'CreatedAt',
    },
    updatedAt: {
      type: Sequelize.DATE,
      field: 'UpdatedAt',
    },
    CreatedBy: {
      type: Sequelize.INTEGER,
    },
    UpdatedBy: {
      type: Sequelize.INTEGER,
    }
  });

  return Roles;
};
