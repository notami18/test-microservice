const Joi = require('joi');

// const id = Joi.string().uuid();
const name = Joi.string();
const username = Joi.string();
const password = Joi.string();
const document = Joi.string();

const createUserSchema = Joi.object({
  name: name.required(),
  document: document.required(),
  username: username.required(),
  password: password.required(),
});

// const updateProductSchema = Joi.object({
//   name: name,
//   price: price,
//   image: image,
// });

// const getUserByIdSchema = Joi.object({
//   id: id.required(),
// });

module.exports = {
  createUserSchema,
  // getUserByIdSchema
};
