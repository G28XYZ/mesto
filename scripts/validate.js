// включение валидации вызовом enableValidation
// все настройки передаются при вызове

const setEventListeners = (input) => {
  checkInputValidity();
  toggleButtonState();
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

    const formInputs = Array.from(
      form.document.querySelectorAll(inputSelector)
    );
    formInputs.forEach((input) => setEventListeners(input));
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
