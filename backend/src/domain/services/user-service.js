const User = require('../../infrastructure/models/user-model');
const jwt = require("jsonwebtoken");

const createUserService = async (createUser) => {
  try {
    const newUser = new User(createUser);
    await newUser.save();
    const token = jwt.sign({ _id: newUser._id }, "secretKey");
    return { message: 'Usuario creado Exitosamente!', token: token };
  } catch (error) {
    throw new error();
  }
};

const getUserService = async () => {
  try {
    const user = await User.find();
    return user;
  } catch (error) {
    throw new error();
  }
};

module.exports = {
  createUserService,
  getUserService,
};
