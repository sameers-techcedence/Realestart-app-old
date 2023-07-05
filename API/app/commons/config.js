const path = require('path');
const nconf = require('nconf');
const config1 = require('../config/config');

const configDir = path.resolve(__dirname, '../config');

/**
 * Load regular file in nconf configuration
 *
 * @param {string} name - nconf configuration variable name.
 * @param {string} filepath - file path to load configuration.
 */
const loadFile = (name, filepath) => {
  nconf.file(name, filepath);
};

/**
 * Get the log level with the submodule (defaults to `warn`).
 * E.g. configuration:
 *
 *  ```json
 * {
 *   "logger" : {
 *     "children" : {
 *       "submodule" : "<level for submodule>"
 *     }
 *     "level" : "<default level for other modules>
 *   }
 * }
 * ```
 *
 * @param {string} component - Sub-component's name.
 * @returns {string}
 */
const logLevel = (component) => {
  const loggerConf = nconf.get('logger') || {};
  const { level = 'warn', children = {} } = loggerConf;
  return children[component] || level;
};

/**
  * Load all configuration from configPath
  *
  * @param  {string} configPath - config directory path
  * @param  {boolean} includeEnvVar - true for inclus envirnoment variable,
  *                            false to ignore
  * @returns {Object}
*/
const config = (configPath, includeEnvVar) => {
  const defaultEnvConfig = path.resolve(configPath, './config.env.json');
  const baseConfig = path.resolve(configPath, `./config-${process.env.NODE_ENV}.json`); // base config
  const nconfSettings = nconf.argv({
    config: {
      default: defaultEnvConfig,
    },
  });

  if (includeEnvVar) {
    nconfSettings.env();
  }

  const envConfig = nconf.get('config');
  
  loadFile('envConfig', envConfig); // per-env config overrides any value
  loadFile('base', baseConfig); // common configuration for all envs

  const config = nconf.get();
  config.get = key => nconf.get(key);
  
  return Object.assign({}, config, {
    logLevel,
  });
};

module.exports = config1;
