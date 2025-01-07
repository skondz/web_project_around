import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupSelector, handleFormSubmit) {
    super(popupSelector);
    this.handleFormSubmit = handleFormSubmit;
    this.formElement=this.popoupElement.quertySelector(selectors:'form')
  }
  _getInputValues() {
    let values ={}
    const inputList = this.formElement.quertySelectorAll(selectors: 'input')
    inputList.forEach((input)) => {
      values[input.name]= input.value;
    });
    return values

  }

  setEventListeners() {
    super.setEventListeners();
    this.formElement.addEventListener('submit', ()=>{
      this.handleFormSubmit(this._getInputValues)
    });
  }
  close() {}
}
