const { validatorHandler } = require('./../middlewares/validator.handler');
const { createUserSchema } = require('../schemas/user-schema');
const createUserController = async (req, res, next) => {
  validatorHandler(createUserSchema, 'body');
  try {
    const data = req.body;
    const response = await createUserService(data);
    return res.status(201).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUserController,
};
