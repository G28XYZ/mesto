import "./index.css";
import {
  validationConfig,
  popupEdit,
  popupAdd,
  profileEditButton,
  cardAddButton,
  gallery,
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api";

const api = new Api({
  address: "https://mesto.nomoreparties.co/v1/cohort-35",
  token: "0a82637d-8f3a-4a9c-b501-7fa9f5bac73e",
});

const popupEditClass = new PopupWithForm(".popup_type_edit", editFormSubmit);
const popupAddClass = new PopupWithForm(".popup_type_add", addFormSubmit);
const popupImageClass = new PopupWithImage(".popup_type_image");
popupEditClass.setEventListeners();
popupAddClass.setEventListeners();
popupImageClass.setEventListeners();

const userInfo = new UserInfo({
  nameProfileSelector: ".profile__name",
  infoProfileSelector: ".profile__job",
});

const popupAddValidation = new FormValidator(validationConfig, popupAdd);
const popupEditValidation = new FormValidator(validationConfig, popupEdit);
popupAddValidation.enableValidation();
popupEditValidation.enableValidation();

const сardsSection = new Section(
  {
    items: "",
    renderer: (place) => {
      const card = getCardElement(place);
      сardsSection.addItem(card);
    },
  },
  gallery
);

function getCardElement(place) {
  const cardElement = new Card(place, "#place-template", () =>
    popupImageClass.open(place)
  );
  return cardElement.generateCard();
}

function editFormSubmit(evt, inputItems) {
  evt.preventDefault();
  userInfo.setUserInfo(inputItems);
  popupEditClass.close();
}

function addFormSubmit(evt, inputItems) {
  evt.preventDefault();
  const card = getCardElement(inputItems);
  сardsSection.addItem(card);
  popupAddClass.close();
  popupAddValidation.setDefaultForm();
}

profileEditButton.addEventListener("click", () => {
  popupEditClass.open(userInfo.getUserInfo());
  popupEditValidation.setDefaultForm();
});

cardAddButton.addEventListener("click", () => {
  popupAddClass.open();
  popupAddValidation.setDefaultForm();
});

api
  .getCards()
  .then((cards) => {
    cards.forEach((card) => {
      const cardElement = getCardElement(card);
      сardsSection.addItem(cardElement);
    });
  })
  .catch((err) => console.log(err));
