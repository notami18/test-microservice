// require("dotenv").config();
// const config = require("./environments").config;
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
// const hsts = require("hsts");
const compression = require('compression');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('../web-api/middlewares/error.handler');
// require("newrelic");
// const {
//   dbConnection,
// } = require("../infraestructure/repositories/postgres-repository");
const app = express();
const port = process.env.PORT || 3001;
const { initApiRoutes } = require('./routes/api-routes');
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
// app.use(
//   hsts({
//     maxAge: parseInt(config.hstsMaxAge), // 180 days in seconds
//   })
// );
const run = async () => {
  app.use((req, res, next) => {
    req.requestTime = Date.now();
    next();
  });
  app.use('/api', initApiRoutes());
  require('../infrastructure/repositories/mongodb-repository');
  app.use(cors());
  app.use(logErrors);
  app.use(boomErrorHandler);
  app.use(errorHandler);
  // await dbConnection();
  app.listen(port, () => console.log(`App Runing on port ${port}`));
};
module.exports = { run };
