export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const token = "0a82637d-8f3a-4a9c-b501-7fa9f5bac73e";
export const address = "https://mesto.nomoreparties.co/v1/cohort-35";

export const popupEdit = document.querySelector(".popup_type_edit");
export const popupAdd = document.querySelector(".popup_type_add");

export const profile = document.querySelector(".profile");
export const profileEditButton = profile.querySelector(".profile__edit-button");

export const cardAddButton = profile.querySelector(".profile__add-button");
export const avatar = profile.querySelector(".profile__avatar");
