export default class Api {
  constructor() {}

  getCards() {
    return fetch("https://mesto.nomoreparties.co/v1/cohort-35/cards", {
      headers: {
        authorization: "0a82637d-8f3a-4a9c-b501-7fa9f5bac73e",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }

  getUserInfo() {
    return fetch("https://nomoreparties.co/v1/cohort-35/users/me", {
      headers: {
        authorization: "0a82637d-8f3a-4a9c-b501-7fa9f5bac73e",
      },
    })
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
      });
  }
}
