class Api {
  constructor({ baseUrl, headers }) {
    this._baseUrl = baseUrl;
    this._headers = headers;
  }

  _getResponseData(response) {
    if (response.ok) { return response.json(); }
    return Promise.reject(new Error(`Server interact Error! Status: ${response.status}`));
  }

  getCards() {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: 'GET',
    })
      .then((res) => this._getResponseData(res));
  }

  postCard({ name, link }) {
    return fetch(`${this._baseUrl}/cards`, {
      headers: this._headers,
      method: 'POST',
      body: JSON.stringify({ name, link }),
    })
      .then((res) => this._getResponseData(res));
  }

  deleteCard({ _id }) {
    return fetch(`${this._baseUrl}/cards/${_id}`, {
      headers: this._headers,
      method: 'DELETE',
    })
      .then((res) => this._getResponseData(res));
  }

  getUserData() {
    return fetch(`${this._baseUrl}/users/me`, {
      method: 'GET',
      headers: this._headers,
    })
      .then((res) => this._getResponseData(res));
  }

  setUserData({ name, about }) {
    return fetch(`${this._baseUrl}/users/me`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify({ name, about }),
    })
      .then((res) => this._getResponseData(res));
  }

  setAvatar(data) {
    return fetch(`${this._baseUrl}/users/me/avatar`, {
      headers: this._headers,
      method: 'PATCH',
      body: JSON.stringify(data),
    })
      .then((res) => this._getResponseData(res));
  }

  changeLikeCardStatus(cardId, isLiked) {
    const method = isLiked ? 'PUT' : 'DELETE';
    return fetch(`${this._baseUrl}/cards/${cardId}/likes`, {
      headers: this._headers,
      method,
    })
      .then((res) => this._getResponseData(res));
  }
}

export default new Api({
  baseUrl: 'http://localhost:3300',
  headers: {
    'credentials': 'include',
    'content-type': 'application/json',
  },
});
