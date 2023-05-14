const { loginService } = require('../../domain/services/login-service');
const { loginSchema } = require('../schemas/login-schema');
const { validatorHandler } = require('./../middlewares/validator.handler');

const loginController = async (req, res, next) => {
  try {
    validatorHandler(loginSchema, 'body');
    const data = req.body;
    const response = await loginService(data);
    return res.status(200).json(response);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  loginController,
};
