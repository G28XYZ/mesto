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

// селекторы попапа - редактировать профиль
const popupEdit = document.querySelector(".popup_type_edit");
const nameEdit = popupEdit.querySelector(".popup__input_elem_name");
const jobEdit = popupEdit.querySelector(".popup__input_elem_job");
const formEdit = popupEdit.querySelector(".popup__form");

// селекторы попапа - добавить карточку
const popupAdd = document.querySelector(".popup_type_add");
const namePlaceAdd = popupAdd.querySelector(".popup__input_elem_name-place");
const linkAdd = popupAdd.querySelector(".popup__input_elem_link");
const formAdd = popupAdd.querySelector(".popup__form");

// селекторы попапа - картинки
const popupImage = document.querySelector(".popup_type_image");
const popupImageTitle = popupImage.querySelector(".popup__subtitle");
const popupImageLink = popupImage.querySelector(".popup__image");

// селекторы секции profile
const profile = document.querySelector(".profile");
const nameProfile = profile.querySelector(".profile__name");
const jobProfile = profile.querySelector(".profile__job");
const profileEditButton = profile.querySelector(".profile__edit-button");
const cardAddButton = profile.querySelector(".profile__add-button");

const gallery = document.querySelector(".gallery");

const popupCloseButtons = document.querySelectorAll(".popup__close");
