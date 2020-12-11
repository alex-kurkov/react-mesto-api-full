const logout = (req, res) => {
  return res.status(200).clearCookie('jwt').send({ message: "выход из приложения выполнен успешно" })
};

module.exports = logout;
