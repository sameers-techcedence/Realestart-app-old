/* eslint-disable consistent-return */
/* eslint-disable no-plusplus */
/* eslint-disable no-await-in-loop */
/* eslint-disable prefer-destructuring */
const _ = require('lodash');
const logger = require('../../logger');
const db = require('../../database/database-connection');
const { messages } = require('../../commons');
const { generateErrorObject, notFound } = require('../../commons/response-format');

const { functions } = db;

/**
 *
 * @param  {Object} req
 * @param  {Object} res
 * @param  {Object} next
 */
module.exports = async (req, res, next) => {
  try {
    const { functions: functionArray } = req.body;
    const functionsData = [];
    let flag = false;
    await (await Promise.all(_.forEach(functionArray, async (item) => {
      const dataItem = await functions.findOne({ where: { FunctionID: item } });
      if (_.isUndefined(dataItem) && _.isEmpty(dataItem) && _.isNull(dataItem)) {
        flag = true;
        return false;
      }
      functionsData.push(dataItem);
    })));
    if (flag) {
      const error = generateErrorObject('functionId', messages('functionNotFound'), 'body');
      notFound(req, res, error);
      return;
    }
    req.functionsData = functionsData;
    await next();


    /*  for (let index = 0; index < functionArray.length; index++) {
      const element = functionArray[index];
      console.log('element==', element);
      const data = await functions.findOne({ FunctionID: element });
      if (!data) {
        const error = generateErrorObject('functionId', messages('functionNotFound'), 'body');
        notFound(req, res, error);
        break;
      }
      fun.push(data);
      // console.log(data);
    }
    req.functionsArray = fun; */
    // next();
  } catch (error) {
    logger.error(`Error while processing request ${req}`);
    next(error);
  }
};
