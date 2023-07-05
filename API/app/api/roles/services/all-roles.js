const logger = require('../../../logger');
const db = require('../../../database/database-connection'); 
const {  roles, Op, sequelize } = db;
const { messages } = require('../../../commons');

module.exports = async (req, res, next) => {
    try {
      let { filter, select } = req.body;
      console.log(select);
      filter = (filter?.length)?filter:'';
      await sequelize.query('SET @i = 0;');
      const result = await roles.findAll({
        attributes: [sequelize.literal('@i := @i + 1 as `S.No`'), ...select],
        where : {
          [Op.or] : [
            {RoleNameInEn : {[Op.like]: `${filter}%`}},
            {IsActive : {[Op.like]: `${filter}%`}},
            {CreatedAt : {[Op.like]: `${filter}%`}},
            {UpdatedAt : {[Op.like]: `${filter}%`}} 
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
  