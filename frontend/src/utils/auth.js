const baseUrl = 'http://localhost:3300';

const getResponseData = (response) => {
  if (response.ok) return response.json();
  return Promise.reject(response);
};

const register = ({ password, email }) => {
  return fetch(`${baseUrl}/signup`,
    {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ password, email }),
    })
  .then((res) => getResponseData(res))
  .catch((e) => {
    switch (e.status) {
      case 400:
        return Promise.reject({ message: 'Пользователь с таким email уже зарегистрирован' });
      default:
        return Promise.reject({ message: 'Что-то пошло не так! Попробуйте ещё раз.' });
    }
  })
}

const login = ({ password, email }) => fetch(
  `${baseUrl}/signin`,
  {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ password, email }),
  })
  .then((res) => getResponseData(res))
  .catch((e) => {
    switch (e.status) {
      case 400:
        return Promise.reject({ message: 'Не передано одно из полей' });
      case 401:
        return Promise.reject({ message: 'Пользователь с такой парой email/пароль не найден' });
      default:
        return Promise.reject({ message: 'Что-то пошло не так! Попробуйте ещё раз.' });
    }
  })

const checkToken = () => {
  return fetch(`${baseUrl}/users/me`,
   {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'credentials': 'include',
    },
    method: 'GET'
  })
  .then((res) => getResponseData(res))
  .catch((e) => {
    switch (e.status) {
      case 401:
        return Promise.reject({ message: 'Токен не передан или передан не в том формате' });
      default:
        return Promise.reject({ message: 'Что-то пошло не так! Попробуйте ещё раз.' });
    }
  })
}

export { register, login, checkToken }
