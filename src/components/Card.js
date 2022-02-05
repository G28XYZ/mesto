export class Card {
  constructor(
    { name, link, likes = [], _id, owner },
    template,
    handleCardClick,
    userId,
    onOpenPopupDelete
  ) {
    this._name = name;
    this._link = link;
    this._cardTemplate = template;
    this._image = null;
    this._cardId = _id;
    this._onOpenPopup = handleCardClick;
    this._likesLength = likes.length;
    this._isUserCard = owner._id === userId;
    this._onOpenPopupDelete = onOpenPopupDelete;
  }

  _getTemplate() {
    const cardElement = document
      .querySelector(this._cardTemplate)
      .content.querySelector(".place")
      .cloneNode(true);
    return cardElement;
  }

  _handleOpenPopup = () => {
    this._onOpenPopup({ name: this._name, link: this._link });
  };

  _handleDeleteCard = () => {
    this._onOpenPopupDelete(this._cardId, this._card);
  };

  _handleToggleLike = (evt) => {
    evt.target.classList.toggle("place__like_active");
  };

  _setHandlerListeners() {
    this._card
      .querySelector(".place__like")
      .addEventListener("click", this._handleToggleLike);

    this._card
      .querySelector(".place__delete")
      .addEventListener("click", this._handleDeleteCard);

    this._image.addEventListener("click", this._handleOpenPopup);
  }

  generateCard() {
    this._card = this._getTemplate();
    this._card.querySelector(".place__title").textContent = this._name;
    this._card.querySelector(".place__like-count").textContent =
      this._likesLength;
    if (!this._isUserCard) {
      this._card
        .querySelector(".place__delete")
        .classList.add("place__delete_hidden");
    }
    this._image = this._card.querySelector(".place__image");

    this._image.src = this._link;
    this._image.alt = this._link;

    this._setHandlerListeners();

    return this._card;
  }
}
