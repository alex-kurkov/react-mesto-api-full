const User = require('../models/user');
const bcrypt = require('bcryptjs');
const { AuthorizationError } = require('../errors/index');


const createUser = (req, res, next) => {
  const { email, password, name, about, avatar } = req.body;
  if (!email || !password) throw new AuthorizationError('не предоставлены email или пароль');
  bcrypt.hash(password, 12)
    .then(hash => User.create({ email, password: hash, name, about, avatar }))
    .then((user) => res.status(200).send({ data: user }))
    .catch(next);
};

module.exports = createUser;
