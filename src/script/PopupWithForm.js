import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, formSubmitHandler) {
    super(popupSelector);
    this._formSubmitHandler = formSubmitHandler;
    this._form = this._popup.querySelector(".popup__form");
    this._handleFormSubmit = this._handleFormSubmit.bind(this);
  }

  _getInputValues() {
    this._inputList = this._form.querySelectorAll("input");
    this._formValues = {};
    this._inputList.forEach((input) => {
      this._formValues[input.name] = input.value;
    });
    return this._formValues;
  }

  _handleFormSubmit(event) {
    event.preventDefault();
    this._formSubmitHandler(this._getInputValues());
  }

  setEventListeners() {
    super.setEventListeners();
    this._form.addEventListener("submit", this._handleFormSubmit);
  }
  open() {
    super.open();
  }

  close() {
    super.close();
    this._form.reset();
  }
}
