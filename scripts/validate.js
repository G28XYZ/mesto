const showInputError = (form, inputElem, errorMsg) => {
  const errorElem = form.querySelector(`.popup__input-error-${inputElem.name}`);
  inputElem.classList.add("popup__input_type_error");
  errorElem.classList.add("popup__input-error_active");
  errorElem.textContent = errorMsg;
};

const hideInputError = (form, inputElem) => {
  const errorElem = form.querySelector(`.popup__input-error-${inputElem.name}`);
  if (inputElem.classList.contains("popup__input_type_error")) {
    errorElem.classList.remove("popup__input-error_active");
    inputElem.classList.remove("popup__input_type_error");
    errorElem.textContent = "";
  }
};

const checkInputValidity = (form, inputElem) => {
  if (inputElem.validity.valid) {
    hideInputError(form, inputElem);
  } else {
    showInputError(form, inputElem, inputElem.validationMessage);
  }
};

const setEventListeners = (form, inputSelector) => {
  const inputList = Array.from(form.querySelectorAll(inputSelector));
  inputList.forEach((inputElem) =>
    inputElem.addEventListener("input", () => {
      checkInputValidity(form, inputElem);
    })
  );
};

const enableValidation = ({
  formSelector,
  inputSelector,
  submitButtonSelector,
  inactiveButtonClass,
  inputErrorClass,
  errorClass,
}) => {
  const formList = Array.from(document.querySelectorAll(formSelector));
  formList.forEach((form) => {
    form.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    setEventListeners(form, inputSelector);
  });
};

enableValidation({
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
