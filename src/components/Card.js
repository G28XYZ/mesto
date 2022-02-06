export class Card {
  constructor(
    { name, link, likes, _id, owner },
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
    this._api
      .deleteLike(this._cardId)
      .then((data) => {
        evt.target.classList.remove("place__like_active");
        this._likeCount.textContent = data.likes.length;
        this._isLiked = false;
      })
      .catch((err) => console.log(`Ошибка удаления лайка: ${err}`));
  }

  _addLike(evt) {
    this._api
      .putLike(this._cardId)
      .then((data) => {
        evt.target.classList.add("place__like_active");
        this._isLiked = true;
        this._likeCount.textContent = data.likes.length;
      })
      .catch((err) => console.log(`Ошибка добавления лайка: ${err}`));
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

    if (this._isUserCard) {
      this._deleteButton.addEventListener("click", this._handleDeleteCard);
    } else {
      this._deleteButton.remove();
    }

    this._image.addEventListener("click", this._handleOpenPopup);
  }

  generateCard() {
    this._card = this._getTemplate();
    this._card.querySelector(".place__title").textContent = this._name;
    this._likeCount = this._card.querySelector(".place__like-count");
    this._likeCount.textContent = this._likesLength;

    this._deleteButton = this._card.querySelector(".place__delete");

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
