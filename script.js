let popup = document.querySelector(".popup");
let nameInput = popup.querySelector(".popup__name");
let jobInput = popup.querySelector(".popup__job");

let profile = document.querySelector(".profile");
let nameProfile = profile.querySelector(".profile__name");
let jobProfile = profile.querySelector(".profile__job");

let editProfile = profile.querySelector(".profile__edit-button");
editProfile.addEventListener("click", function () {
  popup.classList.add("popup_opened");
  nameInput.value = nameProfile.textContent;
  jobInput.value = jobProfile.textContent;
});

let saveProfile = popup.querySelector(".popup__save");
saveProfile.addEventListener("click", function (evt) {
  evt.preventDefault();
  popup.classList.remove("popup_opened");
  nameProfile.textContent = nameInput.value;
  jobProfile.textContent = jobInput.value;
});

let closePopup = popup.querySelector(".popup__close");
closePopup.addEventListener("click", function () {
  popup.classList.remove("popup_opened");
});
