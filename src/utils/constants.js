const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const token = "0a82637d-8f3a-4a9c-b501-7fa9f5bac73e";
const address = "https://mesto.nomoreparties.co/v1/cohort-35";

const popupEdit = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_add");
const popupEditAvatar = document.querySelector(".popup_type_avatar");

const profile = document.querySelector(".profile");
const profileEditButton = profile.querySelector(".profile__edit-button");

const cardAddButton = profile.querySelector(".profile__add-button");
const avatar = profile.querySelector(".profile__avatar");
const avatarContainer = profile.querySelector(".profile__avatar-container");

export {
  validationConfig,
  token,
  address,
  popupAdd,
  popupEdit,
  popupEditAvatar,
  profile,
  profileEditButton,
  cardAddButton,
  avatar,
  avatarContainer,
};
