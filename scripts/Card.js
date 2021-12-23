import { openPopupImage } from "./index.js";

export class Card {
  constructor(place, template) {
    this._name = place.name;
    this._link = place.link;
    this._cardTemplate = template;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".place")
      .cloneNode(true);
    return cardElement;
  }

  _setHandlerListeners() {
    this._card
      .querySelector(".place__like")
      .addEventListener("click", (evt) =>
        evt.target.classList.toggle("place__like_active")
      );

    this._card
      .querySelector(".place__delete")
      .addEventListener("click", () => this._card.remove());

    this._card.querySelector(".place__image").addEventListener("click", () => {
      openPopupImage({ name: this._name, link: this._link });
    });
  }

  generateCard() {
    this._card = this._getTemplate();

    this._card.querySelector(".place__title").textContent = this._name;
    this._card.querySelector(".place__image").src = this._link;
    this._card.querySelector(".place__image").alt = this._name;

    this._setHandlerListeners();

    return this._card;
  }
}
