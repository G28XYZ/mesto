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
const userInfo = new UserInfo({
  nameProfileSelector: ".profile__name",
  infoProfileSelector: ".profile__job",
});

const popupAddValidation = new FormValidator(validationConfig, popupAdd);
const popupEditValidation = new FormValidator(validationConfig, popupEdit);
popupAddValidation.enableValidation();
popupEditValidation.enableValidation();

const addCard = (items) => {
  const сardSection = new Section(
    {
      items,
      renderer: (item) => {
        const card = new Card(item, "#place-template", () =>
          popupImageClass.open(item)
        );
        const cardElement = card.generateCard();
        сardSection.addItem(cardElement);
      },
    },
    gallery
  );
  сardSection.renderItems();
};

addCard(initialCards);

function editFormSubmit(evt, items) {
  evt.preventDefault();
  userInfo.setUserInfo(items);
  popupEditClass.close();
}

function addFormSubmit(evt, items) {
  evt.preventDefault();
  addCard([{ name: items[0], link: items[1] }]);
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
