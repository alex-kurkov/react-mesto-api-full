class Api {
  constructor({ baseUrl }) {
    this._baseUrl = baseUrl;
  }

  static _getResponseData(res) {
    return new Promise((resolve, reject) => {
      const func = res.ok ? resolve : reject;
      res.json().then(func);
    });
  }

  getCards(jwt) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      method: 'GET',
      /*       credentials: 'include', */
    })
      .then(this._getResponseData);
  }

  postCard({ name, link }, jwt) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      method: 'POST',
      body: JSON.stringify({ name, link }),
      /*       credentials: 'include', */
    })
      .then(this._getResponseData);
  }

  deleteCard({ _id }, jwt) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      method: 'DELETE',
      /*       credentials: 'include', */
    })
      .then(this._getResponseData);
  }

  getUserData(jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      /*       credentials: 'include', */
    })
      .then(this._getResponseData);
  }

  setUserData({ name, about }, jwt) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      method: 'PATCH',
      /*       credentials: 'include', */
      body: JSON.stringify({ name, about }),
    })
      .then(this._getResponseData);
  }

  setAvatar(data, jwt) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      method: 'PATCH',
      /*       credentials: 'include', */
      body: JSON.stringify(data),
    })
      .then(this._getResponseData);
  }

  changeLikeCardStatus(cardId, isLiked, jwt) {
    const method = isLiked ? 'PUT' : 'DELETE';
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: {
        'content-type': 'application/json',
        authorization: `Bearer ${jwt}`,
      },
      /*       credentials: 'include', */
      method,
    })
      .then(this._getResponseData);
  }
}

export default new Api({
  baseUrl: 'http://api.kurkov.students.nomoreparties.xyz',
  headers: {
    'content-type': 'application/json',
  },
});
