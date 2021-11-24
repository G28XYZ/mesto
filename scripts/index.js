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

// селекторы секции profile
const profile = document.querySelector(".profile");
const nameProfile = profile.querySelector(".profile__name");
const jobProfile = profile.querySelector(".profile__job");
const profileEditButton = profile.querySelector(".profile__edit-button");
const cardAddButton = profile.querySelector(".profile__add-button");

const placeTemplate = document.querySelector("#place-template").content;

const gallery = document.querySelector(".gallery");

const popupCloseButtons = document.querySelectorAll(".popup__close");

const initialCards = [
  {
    name: "Москва",
    link: "./images/moskva.jpg",
  },
  {
    name: "Шерегеш",
    link: "./images/sheregesh.jpg",
  },
  {
    name: "Новосибирск",
    link: "./images/novosibirsk.jpg",
  },
  {
    name: "Томск",
    link: "./images/tomsk.jpg",
  },
  {
    name: "Волгоград",
    link: "./images/vogograd.jpg",
  },
  {
    name: "Алтай",
    link: "./images/altai.jpg",
  },
];

initialCards.forEach((place) => addCard(place));

function closePopup() {
  document.querySelector(".popup_opened").classList.remove("popup_opened");
}

function editProfile() {
  popupEdit.classList.add("popup_opened");
}

function editFormSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameEdit.value;
  jobProfile.textContent = jobEdit.value;
  closePopup();
}

function openPopupImage(evt) {
  let popupImage = popupImageContainer.parentElement;
  popupImage.classList.add("popup_opened");

  console.log(evt.target.alt);
  popupImageContainer.querySelector(".popup__image").src = evt.target.src;
  popupImageContainer.querySelector(".popup__subtitle").textContent =
    evt.target.alt;
}

function addCard(place) {
  const card = placeTemplate.querySelector(".place").cloneNode(true);
  let cardImage = card.querySelector(".place__image");

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
  cardImage.addEventListener("click", openPopupImage);

  gallery.prepend(card);
}

function addCardPopup() {
  popupAdd.classList.add("popup_opened");
}

function addFormSubmit(evt) {
  evt.preventDefault();
  addCard({ name: namePlaceAdd.value, link: linkAdd.value });
  namePlaceAdd.value = "";
  linkAdd.value = "";
  closePopup();
}

profileEditButton.addEventListener("click", editProfile);
cardAddButton.addEventListener("click", addCardPopup);

formEdit.addEventListener("submit", editFormSubmit);
formAdd.addEventListener("submit", addFormSubmit);

popupCloseButtons.forEach((closeButton) =>
  closeButton.addEventListener("click", closePopup)
);
