const Joi = require('@hapi/joi');

// user signup validation
const signupValidation = data => {
  const schema = {
    name: Joi.string()
      .min(6)
      .required(),
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  };

  return Joi.validate(data, schema);
};

// user login validation
const loginValidation = data => {
  const schema = {
    email: Joi.string()
      .email()
      .required(),
    password: Joi.string()
      .min(6)
      .required()
  };

  return Joi.validate(data, schema);
};

module.exports = { signupValidation, loginValidation };
