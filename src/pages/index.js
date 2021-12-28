import "./index.css";
import {
  validationConfig,
  initialCards,
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

const сardSection = new Section(
  {
    items: initialCards,
    renderer: (place) => {
      const card = getCardElement(place);
      сardSection.addItem(card);
    },
  },
  gallery
);
сardSection.renderItems();

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
  сardSection.addItem(card);
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
