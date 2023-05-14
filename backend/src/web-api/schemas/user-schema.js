const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string();
const username = Joi.string();
const password = Joi.string();

const createUserSchema = Joi.object({
  name: name.required(),
  username: username.required(),
  password: password.required(),

});

const updateProductSchema = Joi.object({
  name: name,
  price: price,
  image: image,
});

const getProductSchema = Joi.object({
  id: id.required(),
});

module.exports = {
  createUserSchema,
};
