const logger = require('../../../logger');
const db = require('../../../database/database-connection');

const { queryTypes, sequelize } = db;
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
    let functionsQry = `SELECT RT.RightID, RT.RightNameInEn, RT.RightSlug,
      CONCAT(
        '[',
        GROUP_CONCAT(
          JSON_OBJECT(
            'FunctionID', FN.FunctionID,
            'FunctionNameInEn', FN.FunctionNameInEn,
            'FunctionSlug', FN.FunctionSlug,
            'RightID', FN.RightID
          )
          ORDER BY FN.OrderNo ASC
        ),
        ']'
      ) AS SubFunctions
      FROM Rights RT
      LEFT JOIN Functions FN using (RightID)
      GROUP BY RT.RightID;`;
    
    const functionsData = await sequelize.query(functionsQry, { type: queryTypes.SELECT });

    res.body = {
      message: messages('functionsRetrivedSuccessfully', lang),
      data: functionsData,
    };
    next();
  } catch (error) {
    logger.error(`Error ${req}`);
    next(error);
  }
};
