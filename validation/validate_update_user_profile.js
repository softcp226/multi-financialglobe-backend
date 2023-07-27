const Joi = require("joi");

const validate_update_user_profile = (req) => {
  const Schema = Joi.object({
    user: Joi.string().required(),
    full_name: Joi.string().required(),
    username: Joi.string().required(),
    email: Joi.string().email().required(),
    // full_name: Joi.string().required(),
    // last_name: Joi.string().required(),
  });
  const result = Schema.validate({
    user: req.user,
    full_name: req.full_name,
    username: req.username,
    email: req.email,
  });
  if (result.error) return result.error.message;
  return true;
};
module.exports = validate_update_user_profile;
