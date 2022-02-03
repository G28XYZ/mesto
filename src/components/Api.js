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
    fetch(`${this._address}/users/me`, {
      method: "PATCH",
      headers: this._headers,
      body: JSON.stringify({
        name,
        about,
      }),
    });
  }
}
