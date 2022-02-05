export class Card {
  constructor(
    { name, link, likes = [], _id, owner },
    template,
    handleCardClick,
    userId,
    onOpenPopupDelete,
    api
  ) {
    this._name = name;
    this._link = link;
    this._cardTemplate = template;
    this._image = null;
    this._cardId = _id;
    this._onOpenPopup = handleCardClick;
    this._likesLength = likes.length;
    this._isLiked = likes.some((like) => userId === like._id);
    this._isUserCard = owner._id === userId;
    this._onOpenPopupDelete = onOpenPopupDelete;
    this._api = api;
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

  _removeLike(evt) {
    evt.target.classList.remove("place__like_active");
    this._api
      .deleteLike(this._cardId)
      .then((message) => {
        console.log(message);
        this._likeCount.textContent = message.likes.length;
      })
      .catch((err) => console.log(`Ошибка удаления лайка: ${err}`));
    this._isLiked = false;
  }

  _addLike(evt) {
    evt.target.classList.add("place__like_active");
    this._api
      .putLike(this._cardId)
      .then((message) => {
        console.log(message);
        this._likeCount.textContent = message.likes.length;
      })
      .catch((err) => console.log(`Ошибка добавления лайка: ${err}`));
    this._isLiked = true;
  }

  _handleClickLike = (evt) => {
    if (this._isLiked) {
      this._removeLike(evt);
    } else {
      this._addLike(evt);
    }
  };

  _setHandlerListeners() {
    this._card
      .querySelector(".place__like")
      .addEventListener("click", this._handleClickLike);

    this._card
      .querySelector(".place__delete")
      .addEventListener("click", this._handleDeleteCard);

    this._image.addEventListener("click", this._handleOpenPopup);
  }

  generateCard() {
    this._card = this._getTemplate();
    this._card.querySelector(".place__title").textContent = this._name;
    this._likeCount = this._card.querySelector(".place__like-count");
    this._likeCount.textContent = this._likesLength;
    if (!this._isUserCard) {
      this._card
        .querySelector(".place__delete")
        .classList.add("place__delete_hidden");
    }
    if (this._isLiked) {
      this._card
        .querySelector(".place__like")
        .classList.add("place__like_active");
    }
    this._image = this._card.querySelector(".place__image");

    this._image.src = this._link;
    this._image.alt = this._name;

    this._setHandlerListeners();

    return this._card;
  }
}
