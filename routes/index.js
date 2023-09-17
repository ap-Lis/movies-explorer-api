const router = require('express').Router();
const { validateSignin, validateSignup } = require('../middlewares/validator');
const { createUser, login } = require('../controllers/users');
const NotFoundError = require('../errors/not-found-err');
const auth = require('../middlewares/auth');
const { URL_NOT_FOUND_MESSAGE } = require('../utils/constants');

router.post('/signin', validateSignin, login);
router.post('/signup', validateSignup, createUser);

router.use(auth);
router.use('/users', require('./users'));
router.use('/movies', require('./movies'));

router.use((req, res, next) => {
  next(new NotFoundError(URL_NOT_FOUND_MESSAGE));
});

module.exports = router;
