const express = require("express");
const {
  createUserController,
} = require("../../../../web-api/controller/user-controller");
ß
const authRouter = () => {
  const router = express.Router();
  router.post("/create", createUserController);
  return router;
};

module.exports = {
  authRouter,
};
