/*
 * Response Format will format the response with status code, message and data
 */

const _ = require('lodash');
const defStatusCode = 200;

/**
 * @param {param} param
 * @param {message} message
 * @param {location} location
 */
const generateErrorObject = (param, message, location) => ({
  param,
  message,
  location,
});

/**
 * @param {errors} errors
 */
const getErrorArray = (errors) => {
  const bodyJson = errors.errors[0];
  bodyJson.message = bodyJson.msg;
  delete bodyJson.msg;
  return bodyJson;
};

/**
 * @param {errors} errors
 */
const getError = (errors) => {
  const bodyJson = errors;
  return bodyJson;
};


/* eslint-disable no-unused-vars */
/**
 * @param {statusCode} statusCode
 */
const checkStatusCode = (statusCode) => {
  if (!statusCode) {
    throw new Error('Status code is required');
  }
  if (!_.isNumber(statusCode)) {
    throw new Error('Status code not a number');
  }
};
/* eslint-enable no-unused-vars */

/**
 * @param {req} req
 * @param {res} res
 */
const success = async (req, res) => {
  res.body = res.body || {};
  res.body.statusCode = res.body.statusCode || 200;
  res.status(res.body.statusCode);
  res.json(res.body);
};

/**
 * @param {req} req
 * @param {res} res
 */
const created = async (req, res) => {
  res.body = res.body || {};
  res.body.statusCode = 201;
  res.status(defStatusCode || 201);
  res.json(res.body);
};

/**
 * @param {req} req
 * @param {res} res
 * @param {errors} errors
 */
const badRequest = (req, res, errors) => {
  res.body = res.body || {};
  res.body = getErrorArray(errors);
  res.body.statusCode = 400;
  res.status(defStatusCode || 400);
  res.json(res.body);
};

/**
 * @param {req} req
 * @param {res} res
 * @param {errors} errors
 */
const badRequestValue = (req, res, errors) => {
  res.body = res.body || {};
  res.body = getError(errors);
  res.body.statusCode = 400;
  res.status(defStatusCode || 400);
  res.json(res.body);
};

/**
 * @param {req} req
 * @param {res} res
 * @param {errors} errors
 */
const unAuthorized = (req, res, errors) => {
  res.body = res.body || {};
  res.body = getError(errors);
  res.body.statusCode = 401;
  res.status(defStatusCode || 401);
  res.json(res.body);
};

/**
 * @param {req} req
 * @param {res} res
 * @param {errors} errors
 */
const notFound = (req, res, errors) => {
  res.body = res.body || {};
  res.body = getError(errors);
  res.body.statusCode = 404;
  res.status(defStatusCode || 404);
  res.json(res.body);
};

/**
 * @param {req} req
 * @param {res} res
 * @param {errors} errors
 */
const conflict = (req, res, errors) => {
  res.body = res.body || {};
  res.body = getError(errors);
  res.body.statusCode = 409;
  res.status(defStatusCode || 409);
  res.json(res.body);
};

/**
 * @param {req} req
 * @param {res} res
 * @param {errors} errors
 */
const internalError = (req, res, errors) => {
  res.body.statusCode = 500;
  res.status(defStatusCode || 500);
  if (errors && errors.param) {
    res.body = errors;
  } else if (errors.stack) {
    const { message, stack } = errors;
    res.body = {
      message,
      stack,
    };
  } else {
    res.body = { message: 'Internal Server Error' };
  }
  res.json(res.body);
};

/**
 * @param {req} req
 * @param {res} res
 * @param {errors} errors
 */
const forbidden = (req, res, errors) => {
  res.body = res.body || {};
  res.body = getError(errors);
  res.body.statusCode = 403;
  res.status(defStatusCode || 403);
  res.json(res.body);
};

/**
 * @param {req} req
 * @param {res} res
 * @param {errors} errors
 */
const unAuthorizedResetPwd = (req, res, errors) => {
  res.body = res.body || {};
  res.body = getError(errors);
  res.body.statusCode = 4013;
  res.status(defStatusCode || 401);
  res.json(res.body);
};

module.exports = {
  success,
  conflict,
  created,
  internalError,
  badRequest,
  badRequestValue,
  unAuthorized,
  unAuthorizedResetPwd,
  notFound,
  forbidden,
  generateErrorObject,
};
