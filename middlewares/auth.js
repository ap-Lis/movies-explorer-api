const jwt = require('jsonwebtoken');
const UnauthorizedError = require('../errors/unauthorized-err');
const { NO_AUTH_MESSAGE, JWT_ERROR_MESSAGE, DEV_JWT_SECRET } = require('../utils/constants');

const { NODE_ENV, JWT_SECRET } = process.env;

module.exports = (req, res, next) => {
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith('Bearer ')) {
    next(new UnauthorizedError(NO_AUTH_MESSAGE));
  }
  const token = authorization.replace('Bearer ', '');
  let payload;
  try {
    payload = jwt.verify(token, NODE_ENV !== 'production' ? DEV_JWT_SECRET : JWT_SECRET);
  } catch (err) {
    next(new UnauthorizedError(JWT_ERROR_MESSAGE));
  }
  req.user = payload;
  return next();
};
