module.exports = (sequelize, Sequelize) => {
  const Templates = sequelize.define('Templates', {
    TemplatId: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Slug: {
      type: Sequelize.STRING,
    },
    SubjectEn: {
      type: Sequelize.STRING,
    },
    TextEn: {
      type: Sequelize.TEXT,
    },
    CreatedBy: {
      type: Sequelize.INTEGER,
    },
    UpdatedBy: {
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
  });
  return Templates;
};
