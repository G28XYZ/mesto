import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector, onSubmit) {
    this._popup = popupSelector;
    this._onSubmit = onSubmit;
  }

  _getInputValues() {}

  setEventListeners() {
    return super.setEventListeners();
  }
}
