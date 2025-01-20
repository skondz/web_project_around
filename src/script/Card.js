import { closeButtonCards, buttonLike } from "./utils.js";
import { api } from "../utils/Api.js";
import { miPopupConConfirmacion } from "./const.js";
export default class Card {
  constructor(name, link, id, likes, selector, handleCardClick) {
    this.name = name;
    this.link = link;
    this.selector = selector;
    this._handleCardClick = handleCardClick;
    this.id = id;
    this.likes = likes;
  }

  _eventListener(clone) {
    this.clone
      .querySelector(".button__type-like")
      .addEventListener("click", () => this._likeCard());

    this.clone
      .querySelector(".button__delete")
      .addEventListener("click", (element) => this._deleteCard(element));

    this.clone.querySelector(".images__card").addEventListener("click", () => {
      this._handleCardClick(this.name, this.link);
    });
    return clone;
  }
  _deleteCard(element) {
    const confirmDelete = () => {
      const cardElement = element.target.closest(".card");
      const deleteButton = document.querySelector(".popup__confirm-button");
      deleteButton.textContent = "Eliminando...";
      api
        .deleteCard(this.id)
        .then(() => {
          cardElement.remove();
          deleteButton.textContent = "Si";
        })
        .catch((error) =>
          console.error("Error al eliminar la tarjeta:", error)
        );
    };
    miPopupConConfirmacion.setConfirmAction(confirmDelete);
    miPopupConConfirmacion.open();
  }

  _likeCard() {
    const isLiked = this.likeButton.classList.contains("button__like-active");
    api
      .likeCard(this.id, isLiked)
      .then((data) => {
        this.likeButton.classList.toggle("button__like-active", !isLiked);
        this.likeButton.classList.toggle("button__like", !isLiked);
        // this.likeCountElement.textContent = data.likes.length;
      })
      .catch((error) =>
        console.error("Error al actualizar el me gusta:", error)
      );
  }

  createCardElement() {
    this.card = document.querySelector(this.selector);
    this.clone = this.card.content.cloneNode(true);
    this.likeButton = this.clone.querySelector(".button__type-like");
    this.likeCountElement = this.clone.querySelector(".card__likes");
    this._setAttributes();
    this._setTextContent();
    this._eventListener();
    return this.clone;
  }
  _setAttributes() {
    const img = this.clone.querySelector("img");
    img.setAttribute("src", this.link);
    img.setAttribute("alt", this.name);
  }
  _setTextContent() {
    this.clone.querySelector(".card__text").textContent = this.name;
  }
}
