const express = require('express');

/**
 * API VERSION 1
 *
 */

const { authRouter } = require('./v1/auth/auth-routes');
const { userRouter } = require('./v1/user/user-routes');

const initApiRoutes = () => {
  const router = express.Router();
  router.use('/v1/auth', authRouter());
  router.use('/v1/user', userRouter());

  return router;
};

module.exports = {
  initApiRoutes,
};
