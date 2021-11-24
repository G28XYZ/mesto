const popupTemplate = document.querySelector("#popup-template").content;
const popupCopy = popupTemplate.querySelector(".popup").cloneNode(true);
const popupContainer = popupCopy.querySelector(".popup__container");
const popupCloseButton = popupContainer.querySelector(".popup__close");
const popupForm = popupContainer.querySelector(".popup__form");

const popup = document.querySelector(".popup");

const profile = document.querySelector(".profile");
const nameProfile = profile.querySelector(".profile__name");
const jobProfile = profile.querySelector(".profile__job");
const profileEditButton = profile.querySelector(".profile__edit-button");

const addPlaceButton = document.querySelector(".profile__add-button");

function closePopup() {
  popup.classList.remove("popup_opened");
}

function removeListener(listener) {
  popupForm.removeEventListener("submit", listener);
}

function createPopup(title, inputs, button) {
  popup.classList.add("popup_opened");

  const popupTitle = popupContainer.querySelector(".popup__title");
  popupTitle.textContent = title;

  const popupSubmitButton = popupContainer.querySelector(".popup__submit");
  popupSubmitButton.value = button;

  const popupInputs = popupContainer.querySelectorAll(".popup__input");
  popupInputs[0].placeholder = inputs[0];
  popupInputs[1].placeholder = inputs[1];

  popup.append(popupContainer);
}

function editProfile() {
  createPopup("Редактировать профиль", ["Имя", "Работа"], "Сохранить");
  const popupInputs = popupContainer.querySelectorAll(".popup__input");
  const nameInput = popupInputs[0];
  const jobInput = popupInputs[1];
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
  popupForm.addEventListener("submit", editFormSubmit);
}

function editFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = evt.target[0].value;
  jobProfile.textContent = evt.target[1].value;
  removeListener(editFormSubmit);
  closePopup();
}

function addPlaceSubmit(evt) {
  evt.preventDefault();
  removeListener(addPlaceSubmit);
  closePopup();
}

function addPlace() {
  createPopup("Новое место", ["Название", "Ссылка на фото"], "Создать");
  const popupInputs = popupContainer.querySelectorAll(".popup__input");
  popupInputs[0].value = "";
  popupInputs[1].value = "";
  popupForm.addEventListener("submit", addPlaceSubmit);
}

profileEditButton.addEventListener("click", editProfile);
popupCloseButton.addEventListener("click", closePopup);
addPlaceButton.addEventListener("click", addPlace);
