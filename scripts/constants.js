const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

const initialCards = [
  {
    name: "Москва",
    link: "./images/moskva.jpg",
  },
  {
    name: "Шерегеш",
    link: "./images/sheregesh.jpg",
  },
  {
    name: "Новосибирск",
    link: "./images/novosibirsk.jpg",
  },
  {
    name: "Томск",
    link: "./images/tomsk.jpg",
  },
  {
    name: "Волгоград",
    link: "./images/volgograd.jpg",
  },
  {
    name: "Алтай",
    link: "./images/altai.jpg",
  },
];

const popupEdit = document.querySelector(".popup_type_edit");
const popupAdd = document.querySelector(".popup_type_add");

const profile = document.querySelector(".profile");
const nameProfile = profile.querySelector(".profile__name");
const jobProfile = profile.querySelector(".profile__job");
const profileEditButton = profile.querySelector(".profile__edit-button");
const cardAddButton = profile.querySelector(".profile__add-button");

const gallery = document.querySelector(".gallery");
