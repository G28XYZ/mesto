import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

function addCard(container, card) {
  container.prepend(card);
}

function createCard(place) {
  const card = new Card(place, "#place-template", openPopupImage);
  return card.generateCard();
}

function render(items) {
  items.forEach((item) => addCard(gallery, createCard(item)));
}

// {{{ функции с логикой для popup's
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  removeHandlerListenersPopup(popup);
}

function openPopup(popup) {
  openPopup.popupOpened = popup;
  popup.classList.add("popup_opened");
  setHandlerListenersPopup(popup);
}

function editFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameEdit.value;
  jobProfile.textContent = jobEdit.value;
  closePopup(popupEdit);
}

function addFormSubmit(evt) {
  evt.preventDefault();
  addCard(
    gallery,
    createCard({ name: namePlaceAdd.value, link: linkAdd.value })
  );
  formAdd.reset();
  popupAddValidation.setDefaultForm();
  closePopup(popupAdd);
}

function openEditProfilePopup() {
  openPopup(popupEdit);
  nameEdit.value = nameProfile.textContent;
  jobEdit.value = jobProfile.textContent;
  popupEditValidation.setDefaultForm();
}

function openAddCardPopup() {
  openPopup(popupAdd);
  popupAddValidation.setDefaultForm();
}

function openPopupImage(place) {
  openPopup(popupImage);
  popupImageTitle.textContent = place.name;
  popupImageLink.src = place.link;
  popupImageLink.alt = place.name;
}

function setHandlerListenersPopup(popup) {
  document.addEventListener("keydown", handleCloseEsc);
  popup.addEventListener("click", handleCloseByOverlay);
}
//  }}}

function handleCloseEsc(evt) {
  evt.key === "Escape" && closePopup(openPopup.popupOpened);
}

function handleCloseByOverlay(evt) {
  evt.target.classList.contains("popup") && closePopup(openPopup.popupOpened);
}

function removeHandlerListenersPopup(popup) {
  document.removeEventListener("keydown", handleCloseEsc);
  popup.removeEventListener("click", handleCloseByOverlay);
}

profileEditButton.addEventListener("click", openEditProfilePopup);
cardAddButton.addEventListener("click", openAddCardPopup);

formEdit.addEventListener("submit", editFormSubmit);
formAdd.addEventListener("submit", addFormSubmit);

popupCloseButtons.forEach((closeButton) =>
  closeButton.addEventListener("click", () => {
    closePopup(closeButton.closest(".popup"));
  })
);

const popupAddValidation = new FormValidator(validationConfig, popupAdd);
const popupEditValidation = new FormValidator(validationConfig, popupEdit);
popupAddValidation.enableValidation();
popupEditValidation.enableValidation();

render(initialCards);
