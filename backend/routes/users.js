const router = require('express').Router();
const {
  getUsers, getUser, patchAvatar, updateUser,
} = require('../controllers/users');
const {
  patchAvatarValidator,
  updateUserValidator,
} = require('../utils/request-validators');

router.get('/me', getUser);
router.get('/', getUsers);
router.patch('/me/avatar', patchAvatarValidator, patchAvatar);
router.patch('/me', updateUserValidator, updateUser);

module.exports = router;
