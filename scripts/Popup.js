class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this._boundHandlerEscClose = this._handleEscClose.bind(this);
    this._boundHandlerCloseByOverlay = this._handleCloseByOverlay.bind(this);
    this._boundHandlerClose = this.close.bind(this);
  }

  _handleEscClose(evt) {
    evt.key === "Escape" && this.close();
  }

  _handleCloseByOverlay(evt) {
    evt.target.classList.contains("popup") && this.close();
  }

  _removeEventListeners() {
    document.removeEventListener("keydown", this._boundHandlerEscClose);
    this._popup.removeEventListener("click", this._boundHandlerCloseByOverlay);
    this._popup
      .querySelector(".popup__close")
      .removeEventListener("click", this._boundHandlerClose);
  }

  setEventListeners() {
    document.addEventListener("keydown", this._boundHandlerEscClose);
    this._popup.addEventListener("click", this._boundHandlerCloseByOverlay);
    this._popup
      .querySelector(".popup__close")
      .addEventListener("click", this._boundHandlerClose);
  }

  open() {
    this._popup.classList.add("popup_opened");
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove("popup_opened");
    this._removeEventListeners();
  }
}

export default Popup;
