export class FormValidator {
  constructor(formElement, settings) {
    this.formElement = formElement;
    this.formSelector = settings.formSelector;
    this.inputSelector = settings.inputSelector;
    this.submitButtonSelector = settings.submitButtonSelector;
    this.inactiveButtonClass = settings.inactiveButtonClass;
    this.inputErrorClass = settings.inputErrorClass;
    this.errorClass = settings.errorClass;
    this.buttonElement = this.formElement.querySelector(
      settings.submitButtonSelector
    );
    this.inputList = Array.from(
      this.formElement.querySelectorAll(this.inputSelector)
    );
  }

  _showInputError(inputElement) {
    // logic to show message error\
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.add(this.inputErrorClass);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this.errorClass);
  }
  _hideInputError(inputElement) {
    // logic to hide message error
    const errorElement = this.formElement.querySelector(
      `.${inputElement.id}-error`
    );
    inputElement.classList.remove(this.inputErrorClass);
    errorElement.classList.remove(this.errorClass);
    errorElement.textContent = "";
  }
  _checkInputValidity(inputElement) {
    if (!inputElement.validity.valid) {
      this._showInputError(inputElement);
    } else {
      this._hideInputError(inputElement);
    }
  }
  _hasInvalidInput() {
    // logic to check if input is invalid
    return this.inputList.some((inputElement) => {
      return !inputElement.validity.valid;
    });
  }
  _toggleButtonState() {
    // logic to disable button
    if (this._hasInvalidInput()) {
      this.buttonElement.classList.add(this.inactiveButtonClass);
    } else {
      this.buttonElement.classList.remove(this.inactiveButtonClass);
    }
  }
  _setEventListeners() {
    this.formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
    });
    this.inputList.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this._toggleButtonState();
        this._checkInputValidity(inputElement);
      });
    });
  }
  enableValidation() {
    this._setEventListeners();
  }
}
