class UserInfo {
  constructor(nameProfileSelector, infoProfileSelector) {
    this._userName = document.querySelector(nameProfileSelector);
    this._userInfo = document.querySelector(infoProfileSelector);
  }

  getUserInfo() {
    return [this._userName.textContent, this._userInfo.textContent];
  }

  setUserInfo(inputsValue) {
    [this._userName.textContent, this._userInfo.textContent] = inputsValue;
  }
}

export default UserInfo;
