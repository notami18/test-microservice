const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const compression = require('compression');
const {
  logErrors,
  errorHandler,
  boomErrorHandler,
} = require('../web-api/middlewares/error.handler');
const app = express();
const port = process.env.PORT || 3001;
const { initApiRoutes } = require('./routes/api-routes');
app.use(compression());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(helmet());
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
  app.listen(port, () => console.log(`App Runing on port ${port}`));
};
module.exports = { run };
