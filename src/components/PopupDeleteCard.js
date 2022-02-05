import Popup from "./Popup";

export default class PopupDeleteCard extends Popup {
  constructor(popupSelector, onSubmit) {
    super(popupSelector);
    this._onSubmit = onSubmit;
    this._popupForm = this._popup.querySelector(".popup__form");
  }

  _onSubmitHandler = (evt) => {
    this._onSubmit(evt, this._cardId, this._card);
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._onSubmitHandler);
  }

  open(cardId, card) {
    super.open();
    this._cardId = cardId;
    this._card = card;
  }
}
