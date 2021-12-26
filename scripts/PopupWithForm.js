import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor({ text, link }, popupSelector) {
    super(popupSelector);
    this._link = link;
    this._text = text;
  }

  open() {
    return super.open();
  }
}
