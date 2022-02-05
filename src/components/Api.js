export default class Api {
  constructor({ address, token }) {
    this._address = address;
    this._token = token;
    this._headers = {
      authorization: this._token,
      "Content-Type": "application/json",
    };
  }

  _handleResponse = (response) => {
    return response.ok
      ? response.json()
      : Promise.reject(`Ошибка ${response.status}`);
  };

  getCards() {
    fetch(`${this._address}/users/`, {
      headers: this._headers,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));

    return fetch(`${this._address}/cards`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  getUserInfo() {
    return fetch(`${this._address}/users/me`, {
      headers: this._headers,
    }).then(this._handleResponse);
  }

  patchProfile({ name, about }) {
    return fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    }).then(this._handleResponse);
  }

  postCard({ name, link }) {
    return fetch(`${this._address}/cards`, {
      method: "POST",
      headers: this._headers,
      body: JSON.stringify({
        name,
        link,
      }),
    }).then(this._handleResponse);
  }

  deleteCard(id) {
    return fetch(`${this._address}/cards/${id}`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  putLike(id) {
    return fetch(`${this._address}/cards/${id}/likes`, {
      method: "PUT",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  deleteLike(id) {
    return fetch(`${this._address}/cards/${id}/likes`, {
      method: "DELETE",
      headers: this._headers,
    }).then(this._handleResponse);
  }

  patchAvatar() {
    return fetch(`${this._address}/users/me/avatar`, {
      method: "PATCH",
      headers: this._headers,
    }).then(this._handleResponse);
  }
}
