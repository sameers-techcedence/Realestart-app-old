const env = process.env.NODE_ENV || 'development';
const dbConfig = require("./config.json");
const config = {
  development: {
    port: 8080,
    host: "http://localhost",
    baseUrl: `http://localhost:8080/`,
    uri: '/api',
    database: {
      url: 'http://localhost:3306',
      host: dbConfig['development']['host'],
      username: dbConfig['development']['username'],
      password: dbConfig['development']['password'],
      databaseName: dbConfig['development']['database'],
      dialect: dbConfig['development']['dialect'],
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
    url: 'http://localhost:4200/',
    aws: {
      accessKey: '',
      secretKey: '',
      region: 'ap-south-1',
    },
    auth: {
      token: {
        tokenExpire: '90d',
        refreshTokenExpire: '180d',
        secret: 'modware smartway',
      },
      AES256: {
        secretkey: '3UI8b7FZBqhsavcm',
        IV: 'u03koH1cu4pXLz65',
      },
    },
    logger: {
      children: {},
      console: 'true',
      count: 5,
      file: false,
      level: 'info',
      path: './logs/log.log',
      period: '1d',
    },
    smtp: {
      smtphost: 'smtp.gmail.com',
      smtpPort: 587,
      fromEmail: 'karthickmichael7@gmail.com',
      username: 'karthickmichael7@gmail.com',
      password: 'nkpaivqtehtvtzwk',
    },
    salt: {
      staticPasswordSalt: '5567888c72eec9e4',
      payloadSalt: '7d684a24f11ec38760c68f36febbf8c7',
    },
    urlEncryptionAlgorithm: {
      algorithm: 'aes256',
    },
  },
  production: {
    port: 8080,
    host: "http://localhost",
    baseUrl: `http://localhost:8080/`,
    uri: '/api',
    database: {
      url: '',
      host: dbConfig['production']['host'],
      username: dbConfig['production']['username'],
      password: dbConfig['production']['password'],
      databaseName: dbConfig['production']['database'],
      dialect: dbConfig['production']['dialect'],
      pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000,
      },
    },
    url: 'http://localhost:4200/',
    aws: {
      accessKey: '',
      secretKey: '',
      region: 'ap-south-1',
    },
    auth: {
      token: {
        tokenExpire: '90d',
        refreshTokenExpire: '180d',
        secret: 'modware smartway',
      },
      AES256: {
        secretkey: '3UI8b7FZBqhsavcm',
        IV: 'u03koH1cu4pXLz65',
      },
    },
    logger: {
      children: {},
      console: 'true',
      count: 5,
      file: false,
      level: 'info',
      path: './logs/log.log',
      period: '1d',
    },
    smtp: {
      smtphost: '',
      smtpPort: 587,
      fromEmail: 'bheda3012@gmail.com',
      username: 'bheda3012@gmail.com',
      password: '',
    },
    salt: {
      staticPasswordSalt: '5567888c72eec9e4',
      payloadSalt: '7d684a24f11ec38760c68f36febbf8c7',
    },
    urlEncryptionAlgorithm: {
      algorithm: 'aes256',
    },
  },
};
module.exports = { ...config[env] };
