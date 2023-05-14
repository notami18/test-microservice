const express = require("express");
const {
  createLoginController,
} = require("../../../../web-api/controller/login-controller");

const authRouter = () => {
  const router = express.Router();
  router.post("/login", createLoginController);
  return router;
};

module.exports = {
  authRouter,
};
