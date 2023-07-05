const config1 = require('./config');

const swaggerOptions = {
    failOnErrors: true,
    definition: {
      openapi: "3.0.0",
      info: {
        title: "Basepack API with Swagger",
        version: "0.1.0",
        description:
          "sss",
        license: {
          name: "MIT",
          url: "https://spdx.org/licenses/MIT.html",
        },
        contact: {
          name: "Basepack",
          url: "",
          email: "info@email.com",
        },
      },
      servers: [
        {
          url: `${config1.baseUrl}api/`,
        },
      ],
      components: {
        securitySchemes: {
          // BearerAuth: {
          //   type: 'http',
          //   scheme: 'bearer',
          //   bearerFormat: 'JWT',
          // },
          AccessToken:{
            type: 'apiKey',
            in: 'header',
            name: 'access-token'
          },
          Language:{
            type: 'apiKey',
            in: 'header',
            name: 'lang'
          }
        }
      },
      security: [{
        Language: []
      }]
    },
    apis: [
      "./app/api/auth/sw-route.js", 
      "./app/api/dashboard/sw-route.js",
      "./app/api/users/sw-route.js",
      "./app/api/roles/sw-route.js",
      "./app/api/email/sw-route.js",
    ],
  };

  module.exports = {...swaggerOptions};