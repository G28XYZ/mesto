import "./index.css";
import {
  validationConfig,
  popupEdit,
  popupAdd,
  popupAvatar,
  profileEditButton,
  cardAddButton,
  avatarContainer,
  token,
  address,
  initialCards,
} from "../utils/constants.js";
import { Card } from "../components/Card.js";
import { FormValidator } from "../components/FormValidator.js";
import PopupWithImage from "../components/PopupWithImage.js";
import PopupWithForm from "../components/PopupWithForm.js";
import PopupDeleteCard from "../components/PopupDeleteCard";
import Section from "../components/Section.js";
import UserInfo from "../components/UserInfo.js";
import Api from "../components/Api";

const api = new Api({
  address,
  token,
});

const popupEditClass = new PopupWithForm(".popup_type_edit", editFormSubmit);
const popupAddClass = new PopupWithForm(".popup_type_add", addFormSubmit);
const popupAvatarClass = new PopupWithForm(".popup_type_avatar", editAvatar);

const popupDeleteClass = new PopupDeleteCard(".popup_type_delete", deleteCard);
const popupImageClass = new PopupWithImage(".popup_type_image");

popupEditClass.setEventListeners();
popupAddClass.setEventListeners();
popupAvatarClass.setEventListeners();

popupImageClass.setEventListeners();
popupDeleteClass.setEventListeners();

const userInfo = new UserInfo({
  nameProfileSelector: ".profile__name",
  infoProfileSelector: ".profile__job",
  avatarProfileSelector: ".profile__avatar",
});

const popupAddValidation = new FormValidator(validationConfig, popupAdd);
const popupEditValidation = new FormValidator(validationConfig, popupEdit);
const popupAvatarValidation = new FormValidator(validationConfig, popupAvatar);
popupAddValidation.enableValidation();
popupEditValidation.enableValidation();
popupAvatarValidation.enableValidation();

const cardsSection = new Section(
  {
    items: initialCards,
    renderer: (place) => {
      const card = getCardElement(place);
      cardsSection.addItem(card);
    },
  },
  ".gallery"
);

const getCards = () => {
  api
    .getCards()
    .then((cards) => {
      initialCards.push(...cards.reverse());
    })
    .catch((err) => console.log(err))
    .finally(() => {
      cardsSection.renderItems();
    });
};

api
  .getUserInfo()
  .then((data) => {
    userInfo.setUserInfo(data);
  })
  .catch((err) => console.log(`Ошибка получения данных пользователя: ${err}`))
  .finally(getCards);

function getCardElement(place) {
  const cardElement = new Card(
    place,
    "#place-template",
    () => popupImageClass.open(place),
    userInfo.getUserInfo().userId,
    (cardId, card) => popupDeleteClass.open(cardId, card),
    api
  );
  return cardElement.generateCard();
}

function changeTypeButton(button, text = "Сохранение...") {
  button.disabled = !button.disabled;
  button.textContent = text;
}

function editFormSubmit(evt, inputItems) {
  evt.preventDefault();
  changeTypeButton(evt.target.querySelector(".popup__button"));
  api
    .patchProfile(inputItems)
    .then((data) => {
      userInfo.setUserInfo(data);
      myconsole.log(123);
    })
    .catch((err) => console.log(`Ошибка редактирование профиля: ${err}`))
    .finally(() => {
      popupEditClass.close();
      changeTypeButton(evt.target.querySelector(".popup__button"), "Сохранить");
    });
}

function addFormSubmit(evt, inputItems) {
  evt.preventDefault();
  changeTypeButton(evt.target.querySelector(".popup__button"));
  api
    .postCard(inputItems)
    .then((data) => {
      const card = getCardElement(data);
      cardsSection.addItem(card);
    })
    .catch((err) => console.log(`Ошибка добавление карточки: ${err}`))
    .finally(() => {
      popupAddClass.close();
      popupAddValidation.setDefaultForm();
      changeTypeButton(evt.target.querySelector(".popup__button"), "Создать");
    });
}

function deleteCard(evt, cardId, card) {
  evt.preventDefault();
  api
    .deleteCard(cardId)
    .catch((err) => console.log(`Ошибка при удалении карточки: ${err}`))
    .finally(() => {
      card.remove();
      popupDeleteClass.close();
    });
}

function editAvatar(evt, { link }) {
  evt.preventDefault();
  changeTypeButton(evt.target.querySelector(".popup__button"));
  api
    .patchAvatar(link)
    .then((data) => userInfo.setUserInfo(data))
    .catch((err) => console.log(`Ошибка при изменении аватар: ${err}`))
    .finally(() => {
      changeTypeButton(evt.target.querySelector(".popup__button"));
      popupAvatarClass.close();
    });
}

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
