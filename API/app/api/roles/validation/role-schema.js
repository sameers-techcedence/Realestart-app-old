const { messages } = require('../../../commons');

const validations = {
  roleNameInEnValidation: {
    in: ['body', 'query', 'params'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('roleNameInEnEmptyMessage'),
    },
    isString: {
      errorMessage: messages('roleNameInEnStringMessage'),
    },
    isLength: {
      errorMessage: messages('roleNameInEnEmptyMessage'),
      options: { min: 1 },
    },
  },
  isActiveValidation: {
    in: ['body', 'query', 'params'],
    exists: {
      options: {
        checkNull: true,
      },
      errorMessage: messages('isActiveEmptyMessage'),
    },
  },
  functionsValidation: {
    in: ['body', 'query', 'params'],
    isArray: {
      errorMessage: messages('functionsEmptyMessage'),
      options: { min: 0 },
    },
  },
};

const rolesValidationSchema = {
  addRoleSchema: {
    roleNameInEn: validations.roleNameInEnValidation,
    // roleNameInAr: validations.roleNameInEnValidation,
    // functions: validations.functionsValidation,
  },
  updateRoleSchema: {
    roleNameInEn: validations.roleNameInEnValidation,
    // roleNameInAr: validations.roleNameInEnValidation,
    isActive: validations.isActiveValidation,
    // functions: validations.functionsValidation,
  },
  updateStatusSchema: {
    isActive: validations.isActiveValidation,
  },
};

module.exports = {
  rolesValidationSchema,
};
