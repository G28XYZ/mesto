// селекторы попапа - редактировать профиль
const popupEdit = document.querySelector(".popup_type_edit");
const nameEdit = popupEdit.querySelector(".popup__input_elem_name");
const jobEdit = popupEdit.querySelector(".popup__input_elem_job");
const formEdit = popupEdit.querySelector(".popup__form");

// селекторы попапа - добавить карточку
const popupAdd = document.querySelector(".popup_type_add");
const namePlaceAdd = popupAdd.querySelector(".popup__input_elem_name-place");
const linkAdd = popupAdd.querySelector(".popup__input_elem_link");
const formAdd = popupAdd.querySelector(".popup__form");

const popupImageContainer = document.querySelector(
  ".popup__container_type_image"
);
const popupImage = popupImageContainer.parentElement;

// селекторы секции profile
const profile = document.querySelector(".profile");
const nameProfile = profile.querySelector(".profile__name");
const jobProfile = profile.querySelector(".profile__job");
const profileEditButton = profile.querySelector(".profile__edit-button");
const cardAddButton = profile.querySelector(".profile__add-button");

const placeTemplate = document.querySelector("#place-template").content;

const gallery = document.querySelector(".gallery");

const popupCloseButtons = document.querySelectorAll(".popup__close");

function render() {
  initialCards.forEach((place) => addCard(place));
}

function togglePopup(selector) {
  selector.classList.toggle("popup_opened");
}

function openEditProfilePopup() {
  togglePopup(popupEdit);
  nameEdit.value = nameProfile.textContent;
  jobEdit.value = jobProfile.textContent;
}

function editFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameEdit.value;
  jobProfile.textContent = jobEdit.value;
  togglePopup(popupEdit);
}

function openPopupImage(namePlace, linkPlace) {
  togglePopup(popupImage);
  popupImageContainer.querySelector(".popup__subtitle").textContent = namePlace;
  popupImageContainer.querySelector(".popup__image").src = linkPlace;
}

function addCard(place) {
  const card = placeTemplate.querySelector(".place").cloneNode(true);
  const cardImage = card.querySelector(".place__image");

  card
    .querySelector(".place__like")
    .addEventListener("click", (evt) =>
      evt.target.classList.toggle("place__like_active")
    );

  card
    .querySelector(".place__delete")
    .addEventListener("click", () => card.remove());

  card.querySelector(".place__title").textContent = place.name;

  cardImage.src = place.link;
  cardImage.alt = place.name;
  cardImage.addEventListener("click", () => {
    openPopupImage(place.name, place.link);
  });

  gallery.prepend(card);
}

function openAddCardPopup() {
  togglePopup(popupAdd);
  namePlaceAdd.value = "";
  linkAdd.value = "";
}

function addFormSubmit(evt) {
  evt.preventDefault();
  if (namePlaceAdd.value && linkAdd.value) {
    addCard({ name: namePlaceAdd.value, link: linkAdd.value });
  }
  togglePopup(popupAdd);
}

profileEditButton.addEventListener("click", openEditProfilePopup);
cardAddButton.addEventListener("click", openAddCardPopup);

formEdit.addEventListener("submit", editFormSubmit);
formAdd.addEventListener("submit", addFormSubmit);

popupCloseButtons.forEach((closeButton) =>
  closeButton.addEventListener("click", () => {
    togglePopup(closeButton.closest(".popup"));
  })
);

render();
