export class Card {
  constructor(name, link) {
    this._name = name;
    this._link = link;
    this._element = this._getTemplate();
  }
  _getTemplate() {
    return document
      .querySelector(".template__elements")
      .cloneNode(true)
      .content.querySelector(".elements__container");
  }
  _setProperties() {
    this._elementImage = this._element.querySelector(".elements__place-image");
    this._elementName = this._element.querySelector(".elements__text");
    this._likeBtn = this._element.querySelector(".elements__like");
    this._dltBtn = this._element.querySelector(".elements__delete");
    this._imgBtn = this._element.querySelector(".elements__place-image");
    this._fullImg = document.querySelector(".popup__fullImg");
    this._footerimg = document.querySelector(".popup__footer");
    this._elementImage.src = this._link;
    this._elementName.textContent = this._name;
    this._popupImg = document.querySelector("#popup-img");
  }

  _handleLike() {
    this._likeBtn.classList.toggle("elements__like-active");
  }
  _handleDelete() {
    this._element.remove();
  }
  _handleClose() {
    this._popupImg.classList.remove("popup__show");
  }
  _setHandleClose(evt) {
    if (evt.key === "Escape") {
      closeAll();
    }
  }
  _setListeners() {
    this._likeBtn.addEventListener("click", () => this._handleLike());
    this._dltBtn.addEventListener("click", () => this._handleDelete());
    this._imgBtn.addEventListener("click", () => this._setPopUp());
  }

  _setPopUp() {
    this._fullImg.src = this._elementImage.src;
    this._fullImg.alt = this._elementImage.alt;
    this._footerimg.textContent = this._elementName.textContent;
    this._popupImg.classList.toggle("popup__show");
    this._closeBtn = document.querySelector("#close-img");
    this._closeBtn.addEventListener("click", () => this._handleClose());
  }

  generateCard() {
    this._setProperties();
    this._setListeners();
    return this._element;
  }
}
