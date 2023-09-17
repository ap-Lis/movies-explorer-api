const mongoose = require('mongoose');
const validator = require('validator');
const {
  MOVIE_REQUIRED_COUNTRY_MESSAGE,
  MOVIE_REQUIRED_DIRECTOR_MESSAGE,
  MOVIE_REQUIRED_DURATION_MESSAGE,
  MOVIE_REQUIRED_YEAR_MESSAGE,
  MOVIE_REQUIRED_DESCRIPTION_MESSAGE,
  MOVIE_REQUIRED_IMAGE_MESSAGE,
  MOVIE_REQUIRED_TRAILER_MESSAGE,
  MOVIE_REQUIRED_THUMBNAIL_MESSAGE,
  MOVIE_REQUIRED_OWNER_MESSAGE,
  MOVIE_REQUIRED_MOVIEID_MESSAGE,
  MOVIE_REQUIRED_NAMERU_MESSAGE,
  MOVIE_REQUIRED_NAMEEN_MESSAGE,
  MOVIE_WRONG_URL_MESSAGE,
} = require('../utils/constants');

const movieSchema = new mongoose.Schema(
  {
    country: {
      type: String,
      required: [true, MOVIE_REQUIRED_COUNTRY_MESSAGE],
    },
    director: {
      type: String,
      required: [true, MOVIE_REQUIRED_DIRECTOR_MESSAGE],
    },
    duration: {
      type: Number,
      required: [true, MOVIE_REQUIRED_DURATION_MESSAGE],
    },
    year: {
      type: String,
      required: [true, MOVIE_REQUIRED_YEAR_MESSAGE],
    },
    description: {
      type: String,
      required: [true, MOVIE_REQUIRED_DESCRIPTION_MESSAGE],
    },
    image: {
      type: String,
      validate: {
        validator: (v) => validator.isURL(v),
        message: MOVIE_WRONG_URL_MESSAGE,
      },
      required: [true, MOVIE_REQUIRED_IMAGE_MESSAGE],
    },
    trailerLink: {
      type: String,
      validate: {
        validator: (v) => validator.isURL(v),
        message: MOVIE_WRONG_URL_MESSAGE,
      },
      required: [true, MOVIE_REQUIRED_TRAILER_MESSAGE],
    },
    thumbnail: {
      type: String,
      validate: {
        validator: (v) => validator.isURL(v),
        message: MOVIE_WRONG_URL_MESSAGE,
      },
      required: [true, MOVIE_REQUIRED_THUMBNAIL_MESSAGE],
    },
    owner: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'user',
      required: [true, MOVIE_REQUIRED_OWNER_MESSAGE],
    },
    movieId: {
      type: Number,
      required: [true, MOVIE_REQUIRED_MOVIEID_MESSAGE],
    },
    nameRU: {
      type: String,
      required: [true, MOVIE_REQUIRED_NAMERU_MESSAGE],
    },
    nameEN: {
      type: String,
      required: [true, MOVIE_REQUIRED_NAMEEN_MESSAGE],
    },
  },
  { versionKey: false },
);

module.exports = mongoose.model('movie', movieSchema);
