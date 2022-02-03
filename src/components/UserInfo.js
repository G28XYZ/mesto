class UserInfo {
  constructor({ nameProfileSelector, infoProfileSelector }) {
    this._userName = document.querySelector(nameProfileSelector);
    this._userInfo = document.querySelector(infoProfileSelector);
  }

  getUserInfo() {
    return {
      name: this._userName.textContent,
      about: this._userInfo.textContent,
    };
  }

  setUserInfo({ name, about }) {
    this._userName.textContent = name;
    this._userInfo.textContent = about;
  }
}

export default UserInfo;
