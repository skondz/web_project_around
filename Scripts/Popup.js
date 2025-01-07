export default class Popup {
  constructor(popupSelector) {
    this.popoupElement = document.querySelector(popupSelector);
  }
  open() {
    this.popoupElement.classList.add("popup__show");
    this._handleEscClose();
  }
  close() {
    this.popoupElement.classList.remove("popup__show");
  }
  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.popoupElement.classList.remove("popup__show");
      }
    });
  }
  setEventListeners() {
    const closeIcon = this.popoupElement.querySelector(".popup__close-button");
    closeIcon.addEventListener("click, this.close");
  }
}
