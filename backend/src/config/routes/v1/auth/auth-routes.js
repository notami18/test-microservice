const express = require("express");
const {
  loginController,
} = require("../../../../web-api/controller/login-controller");

const authRouter = () => {
  const router = express.Router();
  router.post("/login", loginController);
  return router;
};

module.exports = {
  authRouter,
};
