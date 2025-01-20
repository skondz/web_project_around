export default class FormValidator {
  constructor(validationConfig, formElement) {
    this.formElements = document.querySelectorAll(
      validationConfig.formSelector
    );

    this.inputSelector = validationConfig.inputSelector;
    this.submitButtonSelector = validationConfig.submitButtonSelector;
    this.inactiveButtonClass = validationConfig.inactiveButtonClass;
    this.inputErrorClass = validationConfig.inputErrorClass;
    this.errorClass = validationConfig.errorClass;
    this.enableValidation(formElement);
  }

  enableValidation(formElement) {
    const inputElements = Array.from(
      formElement.querySelectorAll(this.inputSelector)
    );
    const submitButtonElement = formElement.querySelector(
      this.submitButtonSelector
    );

    this.toggleSubmitButton(submitButtonElement, formElement);

    inputElements.forEach((inputElement) => {
      inputElement.addEventListener("input", () => {
        this.handleInput(inputElement, formElement, submitButtonElement);
      });
    });
  }

  handleInput(inputElement, formElement, submitButtonElement) {
    if (!inputElement.validity.valid) {
      this.showInputError(inputElement, formElement);
    } else {
      this.hideInputError(inputElement, formElement);
    }

    this.toggleSubmitButton(submitButtonElement, formElement);
  }

  showInputError(inputElement, formElement) {
    inputElement.classList.add(this.inputErrorClass);
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this.errorClass);
  }

  hideInputError(inputElement, formElement) {
    inputElement.classList.remove(this.inputErrorClass);
    const errorElement = formElement.querySelector(`#${inputElement.id}-error`);
    errorElement.textContent = "";
    errorElement.classList.remove(this.errorClass);
  }

  toggleSubmitButton(submitButtonElement, formElement) {
    const inputElements = Array.from(
      formElement.querySelectorAll(this.inputSelector)
    );
    const hasInvalidInput = inputElements.some(
      (inputElement) =>
        !inputElement.validity.valid || inputElement.value.trim() === ""
    );

    if (hasInvalidInput) {
      submitButtonElement.classList.add(this.inactiveButtonClass);
    } else {
      submitButtonElement.classList.remove(this.inactiveButtonClass);
    }
  }
}
