import Popup from "./Popup.js";
export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this.formElement = this.popupElement.querySelector("form");
  }

  _getInputValues() {
    let values = {};
    const inputList = this.formElement.querySelectorAll("input");
    inputList.forEach((input) => {
      values[input.name] = input.value;
    });
    return values;
  }

  // polimorfismo
  setEventListeners() {
    super.setEventListeners();
    this.formElement.addEventListener("submit", () => {
      this.handleFormSubmit(this._getInputValues());

      this.close();
    });
  }
  close() {
    super.close();
    this.formElement.reset;
  }
}
