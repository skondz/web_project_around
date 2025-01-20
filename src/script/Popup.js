export default class Popup {
  constructor(popupSelector) {
    this._popup = document.querySelector(popupSelector);
    this.fixed = document.querySelector(".body");
    this._handleEscClose = this._handleEscClose.bind(this);
    this.open = this.open.bind(this);
  }

  open() {
    this._popup.classList.add("popup_open");
    document.addEventListener("keyup", this._handleEscClose);
    this.fixed.classList.add("fix");
    this.setEventListeners();
  }

  close() {
    this._popup.classList.remove("popup_open");
    document.removeEventListener("keyup", this._handleEscClose);
    this.fixed.classList.remove("fix");
  }

  setEventListeners() {
    this._popup.addEventListener("click", (event) => {
      if (
        event.target.classList.contains("popup_open") ||
        event.target.classList.contains("popup__button-typeclose")
      ) {
        this.close();
      }
    });
  }

  _handleEscClose(event) {
    if (event.key === "Escape") {
      this.close();
    }
  }
}
