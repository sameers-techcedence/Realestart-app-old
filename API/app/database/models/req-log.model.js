module.exports = (sequelize, Sequelize) => {
    const RequestLog = sequelize.define('RequestLog', {
      LogId: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      Method: {
        type: Sequelize.STRING(10),
      },
      Url: {
        type: Sequelize.STRING,
      },
      Ip: {
        type: Sequelize.STRING(50),
      },
      Headers: {
        type: Sequelize.TEXT,
      },
      Request: {
        type: Sequelize.TEXT,
      },
      Response: {
        type: Sequelize.TEXT,
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
    return RequestLog;
  };
  