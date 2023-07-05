/* eslint-disable prefer-destructuring */
const _ = require('lodash');
const logger = require('../../logger');
const db = require('../../database/database-connection');

const { users, sequelize, queryTypes  } = db;

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    let { params: { email } } = req;

    if (_.isUndefined(email)) {
      const { body: { email: temp } } = req;
      email = temp;
    }
    if (_.isUndefined(email)) {
      const { query: { email: temp } } = req;
      email = temp;
    }
    email = email.toLowerCase();
    const usersData = await users.findOne({ where: { Email: email } });
    if (!_.isUndefined(usersData) && !_.isEmpty(usersData) && !_.isNull(usersData)) {

      let roleFunctionsMappingQuery = `SELECT Fn.RightID,Rt.RightSlug,COUNT(Fn.FunctionID) As TotalFunctions,SUM(if(RFM.FunctionID is not null, 1, 0)) As AvailableFunctions,
        CONCAT('{', GROUP_CONCAT( CONCAT( '"', Fn.FunctionSlug , '":', if(RFM.FunctionID is not null, true, false) )  ORDER BY Fn.OrderNo),'}') AS RoleFunctions
        FROM Functions Fn
        JOIN Rights Rt USING(RightID)
        LEFT JOIN RoleFunctionMappings RFM ON Fn.FunctionID = RFM.FunctionID AND RFM.RoleID IN (SELECT RoleID FROM UserRolesMappings WHERE UserID = ${usersData.UserID})
        GROUP BY Fn.RightID;`;

      const roleFunctions = await sequelize.query(roleFunctionsMappingQuery, { type: queryTypes.SELECT }); 

      let menuItemsQuery = `call GetMenuItems()`;
      const menuItemsResult = await sequelize.query(menuItemsQuery, { type: queryTypes.SELECT });  

      usersData.dataValues.roleFunctions = roleFunctions; 
      usersData.dataValues.menuItems = menuItemsResult[0][0]; 
      req.user = usersData;
      req.userExist = true;
    } else {
      req.userExist = false;
    }
    next();
  } catch (error) {
    logger.error(`Error while processing request ${req}`);
    next(error);
  }
};
