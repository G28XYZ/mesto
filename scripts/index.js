const popup = document.querySelector(".popup");
const nameInput = popup.querySelector(".popup__input_elem_name");
const jobInput = popup.querySelector(".popup__input_elem_job");
const formPopup = popup.querySelector(".popup__form");
const popupCloseButton = popup.querySelector(".popup__close");

const profile = document.querySelector(".profile");
const nameProfile = profile.querySelector(".profile__name");
const jobProfile = profile.querySelector(".profile__job");
const profileEditButton = profile.querySelector(".profile__edit-button");

function editProfile() {
  popup.classList.add("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
}

function formSubmit(evt) {
  evt.preventDefault();
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
  closePopup();
}

function closePopup() {
  popup.classList.remove("popup_opened");
}

profileEditButton.addEventListener("click", editProfile);
formPopup.addEventListener("submit", formSubmit);
popupCloseButton.addEventListener("click", closePopup);
