const { messages } = require('../../../commons');

const validations = {
  firstNameValidation: {
    in: ['body', 'query', 'params'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('firstNameEmptyMessage'),
    },
    isString: {
      errorMessage: messages('firstNameStringMessage'),
    },
    isLength: {
      errorMessage: messages('firstNameEmptyMessage'),
      options: { min: 1 },
    },
  },
  lastNameValidation: {
    in: ['body', 'query', 'params'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('lastNameEmptyMessage'),
    },
    isString: {
      errorMessage: messages('lastNameStringMessage'),
    },
    isLength: {
      errorMessage: messages('lastNameEmptyMessage'),
      options: { min: 1 },
    },
  },
  companyNameValidation: {
    in: ['body', 'query', 'params'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('companyNameEmptyMessage'),
    },
    isString: {
      errorMessage: messages('companyNameStringMessage'),
    },
    isLength: {
      errorMessage: messages('companyNameEmptyMessage'),
      options: { min: 1 },
    },
  },
  emailValidation: {
    in: ['body', 'query', 'params'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('userEmailEmptyMessage'),
    },
    isEmail: {
      errorMessage: messages('userEmailFormatMessage'),
    },
  },
  passwordValidation: {
    in: ['body', 'query', 'params'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('passwordEmptyMessage'),
    },
    matches: {
      options: '^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})',
      errorMessage: messages('passwordFormatMessage'),
    },
    isLength: {
      options: { min: 8 },
      errorMessage: messages('lengthOfPassword'),
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
  roleIdValidation: {
    in: ['body', 'query', 'params'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('roleIdEmptyMessage'),
    },
  },
  mobileValidation: {
    in: ['body', 'query', 'params'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('mobileNumberEmptyMessage'),
    },
    isMobilePhone: {
      errorMessage: messages('mobileNumberFormatMessage'),
    },
    isLength: {
      options: { min: 9 },
      errorMessage: messages('lengthOfMobileNumber'),
    },
  },
  agentLicenceNoValidation: {
    in: ['body', 'query', 'params'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('agentLicenceNoEmptyMessage'),
    },
    isMobilePhone: {
      errorMessage: messages('agentLicenceNoFormatMessage'),
    },
    isLength: {
      options: { min: 5 },
      errorMessage: messages('lengthOfAgentLicenceNo'),
    },
  },
};

const usersValidationSchema = {
  addUserSchema: {
    firstName: validations.firstNameValidation,
    lastName: validations.lastNameValidation,
    email: validations.emailValidation,
    password: validations.passwordValidation,
    roleId: validations.roleIdValidation,
    mobile: validations.mobileValidation,
  },
  updateUserSchema: {
    firstName: validations.firstNameValidation,
    lastName: validations.lastNameValidation,
    roleId: validations.roleIdValidation,
    mobile: validations.mobileValidation,
  },
  updateStatusSchema: {
    isActive: validations.isActiveValidation,
  },
};

module.exports = {
  usersValidationSchema,
};
