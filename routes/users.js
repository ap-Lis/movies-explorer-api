const router = require('express').Router();
const { validateUser } = require('../middlewares/validator');

const {
  getCurrentUser,
  updateUser,
} = require('../controllers/users');

router.get('/me', getCurrentUser);
router.patch('/me', validateUser, updateUser);

module.exports = router;
