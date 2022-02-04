import "./index.css";
import {
  validationConfig,
  popupEdit,
  popupAdd,
  popupAvatar,
  popupDelete,
  profileEditButton,
  cardAddButton,
  avatar,
  avatarContainer,
  token,
  address,
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api";

const api = new Api({
  address,
  token,
});

const popupEditClass = new PopupWithForm(".popup_type_edit", editFormSubmit);
const popupAddClass = new PopupWithForm(".popup_type_add", addFormSubmit);
const popupAvatarClass = new PopupWithForm(".popup_type_avatar");
const popupDeleteClass = new PopupWithForm(".popup_type_delete");
const popupImageClass = new PopupWithImage(".popup_type_image");
popupEditClass.setEventListeners();
popupAddClass.setEventListeners();
popupImageClass.setEventListeners();
popupAvatarClass.setEventListeners();
popupDeleteClass.setEventListeners();

const userInfo = new UserInfo({
  nameProfileSelector: ".profile__name",
  infoProfileSelector: ".profile__job",
});

const popupAddValidation = new FormValidator(validationConfig, popupAdd);
const popupEditValidation = new FormValidator(validationConfig, popupEdit);
const popupAvatarValidation = new FormValidator(validationConfig, popupAvatar);
popupAddValidation.enableValidation();
popupEditValidation.enableValidation();
popupAvatarValidation.enableValidation();

const cardsSection = new Section(
  {
    items: [],
    renderer: (place) => {
      const card = getCardElement(place);
      cardsSection.addItem(card);
    },
  },
  ".gallery"
);

function getCardElement(place) {
  const cardElement = new Card(place, "#place-template", () =>
    popupImageClass.open(place)
  );
  return cardElement.generateCard();
}

function editFormSubmit(evt, inputItems) {
  evt.preventDefault();
  api
    .patchProfile(inputItems)
    .then((data) => {
      userInfo.setUserInfo(data);
      avatar.src = data.avatar;
    })
    .catch((err) => console.log(`Error edit profile: ${err}`));
  popupEditClass.close();
}

function addFormSubmit(evt, inputItems) {
  evt.preventDefault();
  api
    .postCard(inputItems)
    .then((data) => {
      const card = getCardElement(data);
      cardsSection.addItem(card);
    })
    .catch((err) => console.log(`Error add card: ${err}`));
  popupAddClass.close();
  popupAddValidation.setDefaultForm();
}

function editAvatar() {}

profileEditButton.addEventListener("click", () => {
  popupEditClass.open(userInfo.getUserInfo());
  popupEditValidation.setDefaultForm();
});

cardAddButton.addEventListener("click", () => {
  popupAddClass.open();
  popupAddValidation.setDefaultForm();
});

avatarContainer.addEventListener("click", () => {
  popupAvatarClass.open();
  popupAvatarValidation.setDefaultForm();
});

api
  .getUserInfo()
  .then((data) => {
    userInfo.setUserInfo(data);
    avatar.src = data.avatar;
  })
  .catch((err) => console.log(err));

api
  .getCards()
  .then((cards) => {
    cards.forEach((card) => {
      const cardElement = getCardElement(card);
      cardsSection.addItem(cardElement);
    });
  })
  .catch((err) => console.log(err));
