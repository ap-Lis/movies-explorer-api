const rateLimit = require('express-rate-limit');
const { LIMITER_MESSAGE } = require('../utils/constants');

const limiterHandler = (req, res, next) => {
  rateLimit({
    windowMs: 15 * 60 * 1000,
    max: 200,
    message: LIMITER_MESSAGE,
  });
  next();
};

module.exports = limiterHandler;
