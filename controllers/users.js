const codes = require('http2');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const { NODE_ENV, JWT_SECRET } = process.env;

const User = require('../models/users');
const NotFoundError = require('../errors/not-found-err');
const BadRequestError = require('../errors/bad-request-err');
const DuplicateKeyError = require('../errors/duplicate-key-err');
const {
  NOT_UNIQ_EMAIL_MESSAGE,
  WRONG_DATA_MESSAGE,
  USER_NOT_FOUND_MESSAGE,
  DEV_JWT_SECRET,
} = require('../utils/constants');

module.exports.createUser = (req, res, next) => {
  bcrypt.hash(req.body.password, 10)
    .then((hash) => User.create({
      email: req.body.email,
      password: hash,
      name: req.body.name,
    }))
    .then((user) => res.status(codes.constants.HTTP_STATUS_CREATED).send({
      email: user.email,
      name: user.name,
    }))
    .catch((err) => {
      if (err.code === 11000) {
        next(new DuplicateKeyError(NOT_UNIQ_EMAIL_MESSAGE));
      } else if (err.name === 'ValidationError') {
        next(new BadRequestError(WRONG_DATA_MESSAGE));
      } else {
        next(err);
      }
    });
};

module.exports.login = (req, res, next) => {
  const { email, password } = req.body;
  return User.findUserByCredentials(email, password)
    .then((user) => { res.send({ token: jwt.sign({ _id: user._id }, NODE_ENV !== 'production' ? DEV_JWT_SECRET : JWT_SECRET, { expiresIn: '7d' }) }); })
    .catch(next);
};

module.exports.updateUser = (req, res, next) => {
  const { email, name } = req.body;
  User.findByIdAndUpdate(req.user._id, { email, name }, { returnDocument: 'after', runValidators: true })
    .orFail(new NotFoundError(USER_NOT_FOUND_MESSAGE))
    .then((users) => {
      res.send(users);
    })
    .catch((err) => {
      if (err.name === 'ValidationError' || err.name === 'CastError') {
        next(new BadRequestError(WRONG_DATA_MESSAGE));
      } else {
        next(err);
      }
    });
};

module.exports.getCurrentUser = (req, res, next) => {
  User.findById(req.user._id)
    .orFail(new NotFoundError(USER_NOT_FOUND_MESSAGE))
    .then((users) => res.send(users))
    .catch(next);
};
