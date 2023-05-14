const { validatorHandler } = require('./../middlewares/validator.handler');
const { createUserSchema, getUserByIdSchema } = require('../schemas/user-schema');
const { createUserService, getUserService } = require('../../domain/services/user-service');

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

const getUserController = async (req, res, next) => {
  try {
    const response = await getUserService();
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  createUserController,
  getUserController
};
