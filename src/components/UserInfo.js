class UserInfo {
  constructor({ nameProfileSelector, infoProfileSelector }) {
    this._userName = document.querySelector(nameProfileSelector);
    this._userInfo = document.querySelector(infoProfileSelector);
    this._userId = "";
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userInfo.textContent,
      userId: this._userId,
    };
  }

  setUserInfo({ name, about, _id }) {
    this._userName.textContent = name;
    this._userInfo.textContent = about;
    this._userId = _id;
  }
}

export default UserInfo;
