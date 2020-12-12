class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponseData(res) {
    return new Promise((resolve, reject) => {
      const func = res.ok ? resolve : reject;
      res.json().then(func)
    })
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: 'GET',
      credentials: 'include',
    })
      .then(this._getResponseData);
  }

  postCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ name, link }),
      credentials: 'include',
    })
      .then(this._getResponseData);
  }

  deleteCard({ _id }) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      headers: this._headers,
      method: 'DELETE',
      credentials: 'include',
    })
      .then(this._getResponseData);
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
      credentials: 'include',
    })
      .then(this._getResponseData);
  }

  setUserData({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify({ name, about }),
    })
      .then(this._getResponseData);
  }

  setAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      credentials: 'include',
      body: JSON.stringify(data),
    })
      .then(this._getResponseData);
  }

  changeLikeCardStatus(cardId, isLiked) {
    const method = isLiked ? 'PUT' : 'DELETE';
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: this._headers,
      credentials: 'include',
      method,
    })
      .then(this._getResponseData);
  }
}

export default new Api({
  baseUrl: 'http://localhost:3300',
  headers: {
    'content-type': 'application/json',
  },
});
