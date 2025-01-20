import Popup from "./Popup.js";

export default class PopupWithImage extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._closeButton = this._popup.querySelector(".button_close");
    this._closeButton.addEventListener("click", () => this.close());
  }

  open(name, link) {
    super.open();

    const popupImageSrc = document.querySelector(".popup__element");
    const popup__title = popupImageSrc.nextElementSibling;
    popupImageSrc.src = link;
    popupImageSrc.alt = name;
    popup__title.textContent = name;
  }

  close() {
    super.close();
    super.setEventListeners();
    document.removeEventListener("keydown", this._handleEscClose);
  }
}
