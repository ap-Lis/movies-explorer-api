const mongoose = require('mongoose');
const validator = require('validator');
const bcrypt = require('bcryptjs');

const UnauthorizedError = require('../errors/unauthorized-err');
const {
  USER_WRONG_CREDENTIALS_MESSAGE,
  USER_WRONG_EMAIL_MESSAGE,
  USER_NAME_MIN_MESSAGE,
  USER_NAME_MAX_MESSAGE,
} = require('../utils/constants');

const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
      validate: {
        validator: (v) => validator.isEmail(v),
        message: USER_WRONG_EMAIL_MESSAGE,
      },
    },
    password: {
      type: String,
      required: true,
      select: false,
    },
    name: {
      type: String,
      minlength: [2, USER_NAME_MIN_MESSAGE],
      maxlength: [30, USER_NAME_MAX_MESSAGE],
      required: true,
    },
  },
  { versionKey: false },
);

userSchema.statics.findUserByCredentials = function findUser(email, password) {
  return this.findOne({ email })
    .select('+password')
    .orFail(new UnauthorizedError(USER_WRONG_CREDENTIALS_MESSAGE))
    .then((user) => bcrypt.compare(password, user.password)
      .then((matched) => {
        if (!matched) {
          return Promise.reject(new UnauthorizedError(USER_WRONG_CREDENTIALS_MESSAGE));
        }
        return user;
      }));
};

module.exports = mongoose.model('user', userSchema);
