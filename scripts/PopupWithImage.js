import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open(text, link) {
    console.log(text, link);
    this._popup.querySelector(".popup__subtitle").textContent = text;
    this._popup.querySelector(".popup__image").src = link;
    super.open();
  }
}

export default PopupWithImage;
