const { isCelebrateError } = require('celebrate');

const celebrateCustomErrorHandler = (err, req, res, next) => {
  if (isCelebrateError(err)) {
    return res.status(400).send({
      message: 'Переданные данные не прошли валидацию',
    });
  }
  return next(err);
};

module.exports = celebrateCustomErrorHandler;
