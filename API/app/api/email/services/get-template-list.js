const logger = require('../../../logger');
const db = require('../../../database/database-connection');
const sequelizeDatatable = require('node-sequelize-datatable');  

const { templates } = db;
const { messages } = require('../../../commons');

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    const { header: { lang } } = req;
    var datatableObj = await sequelizeDatatable(req.body);
    const count = await templates.count();
    const resultData = await templates.findAndCountAll(datatableObj);
    let result = {
      "draw": req.body.draw,
      "recordsFiltered": resultData.count,
      "recordsTotal": count,
      "data": resultData.rows
    };
    res.body = {
      message: messages('success', lang),
      data: result
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
