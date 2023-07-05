const express = require('express');

const { addEmailTemplate, updateEmailTemplate, getEmailTemplateById, retrieveEmailTemplates, deleteEmailTemplates, allEmailTemplates } = require('./services');
const { success } = require('../../commons/response-format');
const { validateToken } = require('../middlewares');

const router = express.Router();


router.post('/template', validateToken, addEmailTemplate, success);
router.put('/template/:templateId', validateToken, updateEmailTemplate, success);
router.post('/template/all', allEmailTemplates, success);
router.get('/template/:templateId', validateToken, getEmailTemplateById, success);
router.post('/template/list', validateToken, retrieveEmailTemplates, success);
router.delete('/template/:templateId', validateToken, deleteEmailTemplates, success);

module.exports = router;
