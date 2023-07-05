// Router declarations
const { userRoute, authRoute, roleRoute, dashboardRoute, emailRoute } = require('./api');
// const { validateToken } = require('./api/middlewares');
/**
 * initialize routes
 *
 * @param  {Object} server
 */


const router = require('express').Router();
module.exports = (server) => {
  server.use('/api/auth', authRoute);
  //server.use(validateToken);
  server.use('/api/users', userRoute);
  server.use('/api/roles', roleRoute);
  server.use('/api/dashboard', dashboardRoute);
  server.use('/api/email', emailRoute);
};



