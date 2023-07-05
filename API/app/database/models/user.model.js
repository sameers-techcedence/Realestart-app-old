module.exports = (sequelize, Sequelize) => {
  const Users = sequelize.define('Users', {
    UserID: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    Email: {
      type: Sequelize.STRING,
    },
    Password: {
      type: Sequelize.STRING,
    },
    PasswordSalt: {
      type: Sequelize.STRING,
    },
    FirstName: {
      type: Sequelize.STRING,
    },
    LastName: {
      type: Sequelize.STRING,
    },
    FullName: {
      type: Sequelize.STRING,
    },
    CompanyName: {
      type: Sequelize.STRING,
    },
    AgentLicenceNo: {
      type: Sequelize.STRING,
    },
    Mobile: {
      type: Sequelize.STRING,
    },
    LastSignIn: {
      type: Sequelize.DATE,
    },
    IsActive: {
      type: Sequelize.INTEGER,
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
    PasswordToken: {
      type: Sequelize.STRING,
    },
    PasswordTokenCreatedAt: {
      type: Sequelize.DATE,
    }
  });
  return Users;
};

