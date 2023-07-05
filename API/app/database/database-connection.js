const { database: { host, username, password, databaseName, dialect, pool: { max, min, acquire, idle } } } = require('../commons/config');
const { Sequelize, QueryTypes, Op } = require('sequelize');

const sequelize = new Sequelize(databaseName, username, password, {
  host,
  dialect,
  pool: {
    max,
    min,
    acquire,
    idle,
  },
});
sequelize.sync({ alter: false });

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.queryTypes = QueryTypes;
db.Op = Op;

db.roles = require('./models/roles.model')(sequelize, Sequelize);
db.users = require('./models/user.model')(sequelize, Sequelize);
db.templates = require('./models/templates.model')(sequelize, Sequelize);
db.rights = require('./models/rights.model')(sequelize, Sequelize);
db.functions = require('./models/functions.model')(sequelize, Sequelize);
db.userRoles = require('./models/users-roles.model')(sequelize, Sequelize);
db.menuItems = require('./models/menuItems.model')(sequelize, Sequelize);
db.roleFunctions = require('./models/roles-functions.model')(sequelize, Sequelize);
db.reqLogs = require('./models/req-log.model')(sequelize, Sequelize);

/**
 * Users and Roles Relations
 */
db.roles.belongsToMany(db.functions, {
  through: {
    model: db.roleFunctions,
    unique: false,
  },
  constraints: false,
  as: 'functions',
  foreignKey: 'RoleID',
});

db.functions.belongsToMany(db.roles, {
  through: {
    model: db.roleFunctions,
    unique: false,
  },
  constraints: false,
  as: 'roles',
  foreignKey: 'FunctionID',
});

db.roles.belongsToMany(db.users, {
  through: {
    model: db.userRoles,
    unique: false,
  },
  constraints: false,
  as: 'userList',
  foreignKey: 'RoleID',
});

db.users.belongsToMany(db.roles, {
  through: {
    model: db.userRoles,
    unique: false,
  },
  constraints: false,
  as: 'roleList',
  foreignKey: 'UserID',
});


/**
 * MenuItems Relations ,
 */

db.menuItems.belongsTo(db.rights, {
  foreignKey: 'RightID',
  as: 'menuright',
});

db.functions.belongsTo(db.rights, {
  foreignKey: 'RightID',
  as: 'functionright',
});

module.exports = db;
