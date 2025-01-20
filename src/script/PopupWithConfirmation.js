import Popup from "./Popup.js";

export default class PopupWithConfirmation extends Popup {
  constructor(popupSelector) {
    super(popupSelector);
    this._confirmButton = this._popup.querySelector(".popup__confirm-button");
  }

  setConfirmAction(confirmHandler) {
    this._confirmHandler = confirmHandler;
    this._confirmButton.removeEventListener("click", this._handleConfirm);
    this._handleConfirm = (event) => {
      event.preventDefault();
      this._confirmHandler();
      this.close();
    };
    this._confirmButton.addEventListener("click", this._handleConfirm);
  }

  setEventListeners() {
    super.setEventListeners();
  }
}
