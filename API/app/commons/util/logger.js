// === imports ============================================================= //

const bunyan = require('bunyan');
const util = require('util');

/**
 *
 * @param {string} path
 * @returns {string}
 */
function updatePathNameWithProcessId(path) {
  if (path.lastIndexOf('.') > path.lastIndexOf('/')) {
    const pos = path.lastIndexOf('.');
    return util.format('%s-%s%s', path.substr(0, pos), process.pid, path.substr(pos));
  }
  return `${path}-${process.pid}.log`;
}
// === logger base ========================================================= //

/**
 * Common logger base for Node Components. Use bunyan.
 * Use it with
 *
 * module.exports = require('./core/util/logger').logger('my-app', config);
 *
 * @param {string} name
 * @param {Object} config - realization of config.js
 * @returns {Object} Bunyan Logger
 */
function logger(name, config) {
  const defaultLogLevel = config.logLevel();
  const loggerSettings = {
    level: defaultLogLevel,
    name,
    streams: [],
  };

  const opts = config.logger;

  if (opts && opts.file) {
    let path = opts.path || util.format('./logs/%s.log', name);

    if (!opts.doNotUseProcessIdInName) {
      path = updatePathNameWithProcessId(path);
    }

    loggerSettings.streams.push({
      type: 'rotating-file',
      path,
      level: defaultLogLevel,
      period: opts.period || '1d',
      count: opts.count || 5,
    });
  }

  if (opts && opts.console) {
    loggerSettings.streams.push({
      stream: process.stdout,
      level: defaultLogLevel,
    });
  }

  const log = bunyan.createLogger(loggerSettings);
  log.on('error', (err) => {
    // Note : This is not fired if the log directory does not exists
    console.error('Cannot setup logger.', err); // eslint-disable-line
  });

  log.childFor = (childName, childOpts) => {
    let logOpts = childOpts;
    if (!childOpts) {
      logOpts = {};
    }
    logOpts.service = childName;
    logOpts.level = config.logLevel(childName);

    return log.child(logOpts);
  };

  return log;
}

// === exports ============================================================= //

module.exports = logger;
