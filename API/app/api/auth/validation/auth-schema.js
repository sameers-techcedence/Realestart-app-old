const { messages } = require('../../../commons');

const validations = {
  passwordToken: {
    in: ['body', 'query', 'params'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('passwordTokenEmptyMessage'),
    },
    isString: {
      errorMessage: messages('passwordTokenStringMessage'),
    },
    isLength: {
      errorMessage: messages('passwordTokenEmptyMessage'),
      options: { min: 1 },
    },
  },
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
  emailValidation: {
    in: ['body', 'query', 'params'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('userEmailEmptyMessage'),
    },
    isString: {
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
  passwordConfirmValidation: {
    in: ['body', 'query', 'params'],
    exists: {
      options: {
        checkNull: true,
        checkFalsy: true,
      },
      errorMessage: messages('confirmPasswordEmptyMessage'),
    },
    custom: {
      errorMessage: messages('confirmPasswordNotMatched'),
      options: (value, { req }) => {
        return value === req.body.password;
      }
    },
  },
};

const jsonValidation = {
  exists: {
    options: {
      checkNull: true,
      checkFalsy: true,
    },
    errorMessage: messages('jsonEmptyMessage'),
  },
  custom: {
    options: (value) => {
      try {
        if (!value || typeof value !== 'string') {
          return false;
        }
        JSON.parse(value);
        return true;
      } catch (error) {
        return false;
      }
    },
    errorMessage: messages('invalidJson'),
  },
};

//TODO add phone number validation

const authValidationSchema = {
  jsonValidation,
  authSchema: {
    email: validations.emailValidation,
    password: validations.passwordValidation,
  },
  resetPasswordSchema: {
    password : validations.passwordValidation,
    passwordConfirmation : validations.passwordConfirmValidation,
    token : validations.passwordToken
  },
  registerSchema: {
    firstName: validations.firstNameValidation,
    lastName: validations.lastNameValidation,
    mobile: validations.mobileValidation,
    companyName: validations.companyNameValidation,
    email: validations.emailValidation,
    agentLicenceNo: validations.agentLicenceNoValidation,
    password: validations.passwordValidation,
    passwordConfirmation: validations.passwordConfirmValidation,
  },
};

module.exports = {
  authValidationSchema,
};
