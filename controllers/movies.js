const codes = require('http2');
const Movie = require('../models/movies');
const BadRequestError = require('../errors/bad-request-err');
const NotFoundError = require('../errors/not-found-err');
const AccessError = require('../errors/access-err');
const {
  WRONG_DATA_MESSAGE,
  FILM_NOT_FOUND_MESSAGE,
  ACCESS_ERROR_MESSAGE,
} = require('../utils/constants');

module.exports.getMovie = (req, res, next) => {
  Movie.find({ owner: req.user._id }, { strictPopulate: false })
    .populate('owner')
    .then((movies) => res.send({ data: movies }))
    .catch(next);
};

module.exports.createMovie = (req, res, next) => {
  const {
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    movieId,
    nameRU,
    nameEN,
  } = req.body;
  Movie.create({
    country,
    director,
    duration,
    year,
    description,
    image,
    trailerLink,
    thumbnail,
    owner: req.user._id,
    movieId,
    nameRU,
    nameEN,
  })
    .then((movies) => movies.populate('owner'))
    .then((movies) => res.status(codes.constants.HTTP_STATUS_CREATED).send({ data: movies }))
    .catch((err) => {
      if (err.name === 'ValidationError') {
        next(new BadRequestError(WRONG_DATA_MESSAGE));
      } else {
        next(err);
      }
    });
};

module.exports.deleteMovie = (req, res, next) => {
  Movie.findById(req.params.id)
    .orFail(new NotFoundError(FILM_NOT_FOUND_MESSAGE))
    .then((movies) => {
      if (movies.owner.toString() === req.user._id) {
        return Movie.findByIdAndDelete(req.params.id).then(() => res.send({ message: 'Фильм удалён' }));
      }
      return next(new AccessError(ACCESS_ERROR_MESSAGE));
    })
    .catch((err) => {
      if (err.name === 'CastError') {
        next(new BadRequestError(WRONG_DATA_MESSAGE));
      } else {
        next(err);
      }
    });
};
