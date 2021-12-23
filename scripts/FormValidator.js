export class FormValidator {
  constructor() {
    this._formSelector = ".popup__form";
    this._inputSelector = ".popup__input";
    this._submitButtonSelector = ".popup__button";
    this._inactiveButtonClass = "popup__button_disabled";
    this._inputErrorClass = "popup__input_type_error";
    this._errorClass = "popup__error_visible";
  }

  // скрыть ошибки при открытии попапа и тогл кнопки.
  setDefaultForm(form) {
    const inputList = Array.from(form.querySelectorAll(this._inputSelector));
    const button = form.querySelector(this._submitButtonSelector);
    this._toggleButton(inputList, button);
    inputList.forEach((input) => {
      this._hideInputError(form, input);
    });
  }

  _showInputError(form, input, errorMessage) {
    const errorElement = form.querySelector(`.popup__error-${input.name}`);
    input.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(form, input) {
    const errorElement = form.querySelector(`.popup__error-${input.name}`);
    input.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity = (form, input) => {
    if (!input.validity.valid) {
      this._showInputError(form, input, input.validationMessage);
    } else {
      this._hideInputError(form, input);
    }
  };

  _hasInvalidInputs(inputList) {
    return inputList.some((input) => !input.validity.valid);
  }

  _toggleButton = (inputList, button) => {
    if (this._hasInvalidInputs(inputList)) {
      button.classList.add(this._inactiveButtonClass);
      button.disabled = true;
    } else {
      button.classList.remove(this._inactiveButtonClass);
      button.disabled = false;
    }
  };

  _setEventListeners(form) {
    const inputList = Array.from(form.querySelectorAll(this._inputSelector));
    const button = form.querySelector(this._submitButtonSelector);

    inputList.forEach((input) =>
      input.addEventListener("input", () => {
        this._toggleButton(inputList, button);
        this._checkInputValidity(form, input);
      })
    );
  }

  enableValidation() {
    const formList = Array.from(document.querySelectorAll(this._formSelector));
    formList.forEach((form) => {
      form.addEventListener("submit", (evt) => {
        evt.preventDefault();
      });
      this._setEventListeners(form);
    });
  }
}
