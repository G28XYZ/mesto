import Popup from "./Popup.js";

class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
  }

  open({ name, link }) {
    console.log(name, link);
    this._popup.querySelector(".popup__subtitle").textContent = name;
    this._popup.querySelector(".popup__image").src = link;
    super.open();
  }
}

export default PopupWithImage;
