import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";
import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import Section from "./Section.js";
import UserInfo from "./UserInfo.js";

const popupAddClass = new PopupWithForm(".popup_type_add", addFormSubmit);
const popupEditClass = new PopupWithForm(".popup_type_edit", editFormSubmit);
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
  const newCard = new Section(
    {
      items,
      renderer: (item) => {
        const card = new Card(item, "#place-template", () =>
          popupImageClass.open(item)
        );
        const cardElement = card.generateCard();
        newCard.addItem(cardElement);
      },
    },
    gallery
  );
  newCard.renderItems();
};

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

addCard(initialCards);
