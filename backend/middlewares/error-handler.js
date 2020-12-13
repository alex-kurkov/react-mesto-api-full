const celebrate = require('celebrate');

const errorHandler = (err, req, res, next) => {
  let error = {
    statusCode: err.statusCode || 500,
    message: err.message || 'Ошибка сервера',
  };
  // 404 and 403 errors are passed through immutated  
  if (isCelebrateError(err)) {
    error.message = 'Переданные данные не прошли валидацию';
  }
  if (err.name === 'ValidationError') {
    error.statusCode = 401;
    error.message = err.message;
  }
  if (err.name === 'MongoError') {
    error.statusCode = 409;
    error.message = 'Пользователь с таким email уже зарегистрирован'
  }
  if (err.name === 'CastError') {
    error.statusCode = 422;
    error.message = 'В запросе переданы значения неправильного типа';
  }
  if (err.name === 'DisconnectedError') {
    error.statusCode = 503;
    error.message = 'нет соединения с базой данных';
  }
  res.status(error.statusCode).send({ message: error.message });
}

module.exports = errorHandler;
