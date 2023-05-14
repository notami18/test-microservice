const express = require("express");
const {
  createUserController,
  getUserController
} = require("../../../../web-api/controller/user-controller");

const userRouter = () => {
  const router = express.Router();
  router.post("/create", createUserController);
  router.get("/list", getUserController)
  return router;
};

module.exports = {
  userRouter,
};
