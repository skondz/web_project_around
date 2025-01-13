export default class Popup {
  constructor(popupSelector) {
    this.popupElement = document.querySelector(popupSelector);
  }

  open() {
    this.popupElement.classList.add("popup__show");
    this._handleEscClose();
  }

  close() {
    this.popupElement.classList.remove("popup__show");
  }

  // método privado inicia el nombre con un guión abajo (_)
  _handleEscClose() {
    document.addEventListener("keydown", (evt) => {
      if (evt.key === "Escape") {
        this.popupElement.classList.remove("popup__show");
      }
    });
  }
  setEventListeners() {
    const closeIcon = this.popupElement.querySelector(".popup__close-button");
    closeIcon.addEventListener("click", this.close);
  }
}
