const logger = require('../../../logger');
const db = require('../../../database/database-connection'); 
const { templates, Op, sequelize } = db;
const { messages } = require('../../../commons');

module.exports = async (req, res, next) => {
    try {
      let { filter, select } = req.body;
      console.log(select);
      filter = (filter?.length)?filter:'';
      await sequelize.query('SET @i = 0;');
      const result = await templates.findAll({
        attributes: [sequelize.literal('@i := @i + 1 as `S.No`'), ...select],
        where : {
          [Op.or] : [
            {Slug : {[Op.like]: `${filter}%`}},
            {SubjectEn : {[Op.like]: `${filter}%`}}
          ]
        },
        raw:true
      });
      res.body = {
        message: messages('success'),
        data: result
      };
      next();
    } catch (error) {
      logger.error(`Error ${req}`);
      next(error);
    }
  };
  