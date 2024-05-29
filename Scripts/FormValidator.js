class FormValidator {
  constructor(formElement, settings) {
    this.formElement = formElement;
    this.formSelector = settings.formSelector;
    this.inputSelector = settings.inputSelector;
    this.submitButtonSelector = settings.submitButtonSelector;
    this.inactiveButtonClass = settings.inactiveButtonClass;
    this.inputErrorClass = settings.inputErrorClass;
    this.errorClass = settings.errorClass;
    this.buttonElement = this.formElement.querySelector(
      this.submitButtonSelector
    );
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.inputSelector)
    );
  }
  _shownputError(inputElement) {}
  _hideInputError(inputElement) {}
  _checkInputValidity(inputElement) {}
  _hasInvalidInput() {}
  _toggleButtonState() {}
  _setEventListeners() {}
  enableValidation() {}
}
