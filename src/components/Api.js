export default class Api {
  constructor({ address, token }) {
    this._address = address;
    this._token = token;
  }

  _handleResponse = (response) => {
    return response.ok
      ? response.json()
      : Promise.reject(`Ошибка ${response.status}`);
  };

  getCards() {
    return fetch(`${this._address}/cards`, {
      headers: { authorization: this._token },
    }).then(this._handleResponse);
  }

  getUserInfo() {
    return fetch("https://nomoreparties.co/v1/cohort-35/users/me", {
      headers: { authorization: this._token },
    }).then(this._handleResponse);
  }
}
