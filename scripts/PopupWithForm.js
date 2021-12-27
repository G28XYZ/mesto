import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, onSubmit) {
    super(popupSelector);
    this._onSubmit = onSubmit;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._firstInput = this._popupForm.querySelectorAll(".popup__input")[0];
    this._secondInput = this._popupForm.querySelectorAll(".popup__input")[1];
  }

  _getInputValues() {
    return [this._firstInput.value, this._secondInput.value];
  }

  _onSubmitHandler = (evt) => {
    console.log(this._popup);
    this._onSubmit(evt, this._getInputValues());
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._onSubmitHandler);
  }

  open(inputValues = []) {
    super.open();
    this._firstInput.value = inputValues[0] || "";
    this._secondInput.value = inputValues[1] || "";
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}

export default PopupWithForm;
