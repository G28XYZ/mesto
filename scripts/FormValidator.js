export class FormValidator {
  constructor(config, form) {
    this._inputSelector = config.inputSelector;
    this._submitButtonSelector = config.submitButtonSelector;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._errorClass = config.errorClass;
    this._form = form;
  }

  // скрыть ошибки при открытии попапа и тогл кнопки.
  setDefaultForm() {
    const inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    const button = this._form.querySelector(this._submitButtonSelector);
    this._toggleButton(inputList, button);
    inputList.forEach((input) => {
      this._hideInputError(input);
    });
  }

  _showInputError(input, errorMessage) {
    const errorElement = this._form.querySelector(
      `.popup__error-${input.name}`
    );
    input.classList.add(this._inputErrorClass);
    errorElement.classList.add(this._errorClass);
    errorElement.textContent = errorMessage;
  }

  _hideInputError(input) {
    const errorElement = this._form.querySelector(
      `.popup__error-${input.name}`
    );
    input.classList.remove(this._inputErrorClass);
    errorElement.classList.remove(this._errorClass);
    errorElement.textContent = "";
  }

  _checkInputValidity = (input) => {
    if (!input.validity.valid) {
      this._showInputError(input, input.validationMessage);
    } else {
      this._hideInputError(input);
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

  _setEventListeners() {
    const inputList = Array.from(
      this._form.querySelectorAll(this._inputSelector)
    );
    const button = this._form.querySelector(this._submitButtonSelector);

    inputList.forEach((input) =>
      input.addEventListener("input", () => {
        this._toggleButton(inputList, button);
        this._checkInputValidity(input);
      })
    );
  }

  enableValidation() {
    this._form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this._setEventListeners();
  }
}
