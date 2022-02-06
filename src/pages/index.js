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

const popupEditClass = new PopupWithForm(".popup_type_edit", handleEditForm);
const popupAddClass = new PopupWithForm(".popup_type_add", handleAddForm);
const popupAvatarClass = new PopupWithForm(
  ".popup_type_avatar",
  handleEditAvatarForm
);

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
  { renderer: (place) => getCardElement(place) },
  ".gallery"
);

Promise.all([api.getUserInfo(), api.getCards()])
  .then(([userData, cards]) => {
    userInfo.setUserInfo(userData);
    cardsSection.renderItems(cards.reverse());
  })
  .catch((err) =>
    console.log(`Ошибка получения данных пользователя/карточек: ${err}`)
  );

function getCardElement(place) {
  const cardElement = new Card(
    place,
    "#place-template",
    () => popupImageClass.open(place),
    userInfo.getUserInfo().userId,
    (cardId, card) => popupDeleteClass.open(cardId, card),
    handleLike
  );
  return cardElement.generateCard();
}

function handleLike(card) {
  api
    .likeCard(card.getCardInfo())
    .then((res) => card.updateLike(res))
    .catch((err) => console.log(`Ошибка обновления лайка: ${err}`));
}

function handleEditForm(evt, inputItems) {
  evt.preventDefault();
  popupEditClass.renderLoading(true);
  api
    .patchProfile(inputItems)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupEditClass.close();
    })
    .catch((err) => console.log(`Ошибка редактирование профиля: ${err}`))
    .finally(() => {
      popupEditClass.renderLoading(false, "Сохранить");
    });
}

function handleAddForm(evt, inputItems) {
  evt.preventDefault();
  popupAddClass.renderLoading(true);
  api
    .postCard(inputItems)
    .then((data) => {
      cardsSection.addItem(data);
      popupAddClass.close();
    })
    .catch((err) => console.log(`Ошибка добавление карточки: ${err}`))
    .finally(() => {
      popupAddClass.renderLoading(false, "Создать");
    });
}

function deleteCard(evt, { cardId, card }) {
  evt.preventDefault();
  api
    .deleteCard(cardId)
    .then(() => {
      card.remove();
      popupDeleteClass.close();
    })
    .catch((err) => {
      console.log(`Ошибка при удалении карточки: ${err}`);
    });
}

function handleEditAvatarForm(evt, { link }) {
  evt.preventDefault();
  popupAvatarClass.renderLoading(true);
  api
    .patchAvatar(link)
    .then((data) => {
      userInfo.setUserInfo(data);
      popupAvatarClass.close();
    })
    .catch((err) => console.log(`Ошибка при изменении аватар: ${err}`))
    .finally(() => {
      popupAvatarClass.renderLoading(false, "Сохранить");
    });
}

profileEditButton.addEventListener("click", () => {
  popupEditClass.open(userInfo.getUserInfo());
  popupEditValidation.setDefaultForm(false);
});

cardAddButton.addEventListener("click", () => {
  popupAddClass.open();
  popupAddValidation.setDefaultForm();
});

avatarContainer.addEventListener("click", () => {
  popupAvatarClass.open();
  popupAvatarValidation.setDefaultForm();
});
