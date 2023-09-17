const errors = require('http2');
const { COMMON_ERROR_MESSAGE } = require('../utils/constants');

const errorHandler = (err, req, res, next) => {
  const statusCode = err.statusCode || errors.constants.HTTP_STATUS_INTERNAL_SERVER_ERROR;
  const message = statusCode === errors.constants.HTTP_STATUS_INTERNAL_SERVER_ERROR
    ? COMMON_ERROR_MESSAGE : err.message;
  res.status(statusCode).send({ message });
  next();
};

module.exports = errorHandler;
