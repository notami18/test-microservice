const express = require('express');

const User = require('../../infrastructure/models/user-model');

const createUserService = async (createUser) => {
  try {
    const newUser = new User(createUser);
    await newUser.save();
    return { message: 'Usuario creado Exitosamente!' };
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
