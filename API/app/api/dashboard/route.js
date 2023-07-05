const express = require('express');

const { dashboardData } = require('./services');
const { success } = require('../../commons/response-format');
const { validateToken } = require('../middlewares');

const router = express.Router();


router.get('/get-dashboard-data', validateToken, dashboardData, success);

module.exports = router;
