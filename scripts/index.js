const popupTemplate = document.querySelector("#popup-template").content;
const popupCopy = popupTemplate.querySelector(".popup").cloneNode(true);
const popupContainer = popupCopy.querySelector(".popup__container");
const popupCloseButton = popupCopy.querySelector(".popup__close");

const popup = document.querySelector(".popup");

const profile = document.querySelector(".profile");
const nameProfile = profile.querySelector(".profile__name");
const jobProfile = profile.querySelector(".profile__job");
const profileEditButton = profile.querySelector(".profile__edit-button");

const addPlaceButton = document.querySelector(".profile__add-button");

function closePopup() {
  popup.classList.remove("popup_opened");
}

function editProfile() {
  popup.classList.add("popup_opened");

  const popupTitle = popupContainer.querySelector(".popup__title");
  popupTitle.textContent = "Редактировать профиль";

  const popupInputs = popupContainer.querySelectorAll(".popup__input");
  const nameInput = popupInputs[0];
  const jobInput = popupInputs[1];

  const popupSubmitButton = popupContainer.querySelector(".popup__submit");
  popupSubmitButton.value = "Сохранить";

  const popupForm = popupContainer.querySelector(".popup__form");

  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;

  popupForm.addEventListener("submit", editFormSubmit);
  popup.append(popupContainer);
}

function editFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = evt.target[0].value;
  jobProfile.textContent = evt.target[1].value;
  closePopup();
}

function addPlace() {
  popup.classList.add("popup_opened");
}

function addPlaceSubmit(evt) {}

profileEditButton.addEventListener("click", editProfile);
popupCloseButton.addEventListener("click", closePopup);
addPlaceButton.addEventListener("click", addPlace);
