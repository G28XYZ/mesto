import Moscow from "../images/moskva.jpg";
import Sheregesh from "../images/sheregesh.jpg";
import Novosibirsk from "../images/novosibirsk.jpg";
import Tomsk from "../images/tomsk.jpg";
import Volgograd from "../images/volgograd.jpg";
import Altai from "../images/altai.jpg";

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};

export const initialCards = [
  {
    name: "Москва",
    link: Moscow,
  },
  {
    name: "Шерегеш",
    link: Sheregesh,
  },
  {
    name: "Новосибирск",
    link: Novosibirsk,
  },
  {
    name: "Томск",
    link: Tomsk,
  },
  {
    name: "Волгоград",
    link: Volgograd,
  },
  {
    name: "Алтай",
    link: Altai,
  },
];

export const popupEdit = document.querySelector(".popup_type_edit");
export const popupAdd = document.querySelector(".popup_type_add");

export const profile = document.querySelector(".profile");
export const profileEditButton = profile.querySelector(".profile__edit-button");
export const cardAddButton = profile.querySelector(".profile__add-button");

export const gallery = document.querySelector(".gallery");
