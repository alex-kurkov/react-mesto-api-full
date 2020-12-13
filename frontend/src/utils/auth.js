const baseUrl = 'http://kurkov.students.nomoreparties.xyz';

const getResponseData = (res) => {
  return new Promise((resolve, reject) => {
    const func = res.ok ? resolve : reject;
    res.json().then(func)
  })
}

const register = ({ password, email }) => {
  return fetch(`${baseUrl}/signup`,
    {
      headers: {
        'content-type': 'application/json',
      },
      method: 'POST',
      body: JSON.stringify({ password, email }),
    })
  .then(getResponseData)
}

const login = ({ password, email }) => fetch(
  `${baseUrl}/signin`,
  {
    headers: {
      'content-type': 'application/json',
    },
    method: 'POST',
    body: JSON.stringify({ password, email }),
    credentials: 'include',
  })
  .then(getResponseData)

const logout = () => {
  return fetch(`${baseUrl}/signout`,
    {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'POST'
  })
  .then(getResponseData)
}

const checkToken = () => {
  return fetch(`${baseUrl}/users/me`,
   {
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    credentials: 'include',
    method: 'GET'
  })
  .then(getResponseData)
}

export { register, login, checkToken, logout }
