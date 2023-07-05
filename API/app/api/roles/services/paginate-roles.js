const logger = require('../../../logger');
const AdminsRto = require('../rto/roles.rto');
const db = require('../../../database/database-connection');
const sequelizeDatatable = require('node-sequelize-datatable');  

const { roles } = db;
const { messages } = require('../../../commons');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    const lang = req.header('lang');
    
    var datatableObj = await sequelizeDatatable(req.body);
    const count = await roles.count();
    const rolesData = await roles.findAndCountAll(datatableObj);

    // const transformedCards = rolesData.map((Roles) => {
    //   return new AdminsRto(lang, Roles.dataValues)
    // })

    let result = {
        "draw": req.body.draw,
        "recordsFiltered": rolesData.count,
        "recordsTotal": count,
        "data": rolesData.rows
    };
    res.body = {
      message: messages('rolesRetrivedSuccessfully', lang),
      data: result,
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
