export function closeButtonCards(event) {
  const card = event.target.closest(".card");
  if (card) {
    const cardId = card.getAttribute("data-card-id");
    console.log(cardId);
  }
}

export function buttonLike(evet) {
  evet.target.classList.toggle("button__like");
}

export const validationConfig = {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};
