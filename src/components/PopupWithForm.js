import Popup from "./Popup.js";

class PopupWithForm extends Popup {
  constructor(popupSelector, onSubmit) {
    super(popupSelector);
    this._onSubmit = onSubmit;
    this._popupForm = this._popup.querySelector(".popup__form");
    this._inputList = Array.from(
      this._popupForm.querySelectorAll(".popup__input")
    );
  }

  _getInputValues() {
    return this._inputList.reduce((obj, input) => {
      obj[input.name] = input.value;
      return obj;
    }, {});
  }

  _onSubmitHandler = (evt) => {
    this._onSubmit(evt, this._getInputValues());
  };

  setEventListeners() {
    super.setEventListeners();
    this._popupForm.addEventListener("submit", this._onSubmitHandler);
  }

  open(inputValues = {}) {
    super.open();
    this._inputList.forEach((input) => {
      input.value = inputValues[input.name] || "";
    });
  }

  close() {
    this._popupForm.reset();
    super.close();
  }
}

export default PopupWithForm;
