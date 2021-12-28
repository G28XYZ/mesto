class UserInfo {
  constructor({ nameProfileSelector, infoProfileSelector }) {
    this._userName = document.querySelector(nameProfileSelector);
    this._userInfo = document.querySelector(infoProfileSelector);
  }

  getUserInfo() {
    return {
      fullname: this._userName.textContent,
      job: this._userInfo.textContent,
    };
  }

  setUserInfo({ fullname, job }) {
    this._userName.textContent = fullname;
    this._userInfo.textContent = job;
  }
}

export default UserInfo;
