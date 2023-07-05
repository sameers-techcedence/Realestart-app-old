const addEmailTemplate = require(__dirname +'/add-email-template');
const updateEmailTemplate = require(__dirname +'/update-template');
const getEmailTemplateById = require(__dirname +'/get-template-by-id');
const retrieveEmailTemplates = require(__dirname +'/get-template-list');
const deleteEmailTemplates = require(__dirname +'/delete-template');
const allEmailTemplates = require(__dirname +'/all-email-templates');


module.exports = {
  addEmailTemplate,
  updateEmailTemplate,
  getEmailTemplateById,
  retrieveEmailTemplates,
  deleteEmailTemplates,
  allEmailTemplates,
};
