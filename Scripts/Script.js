const profileElement = document.querySelector(".profile");
const profileNameElement = profileElement.querySelector(".profile__info");
const profileTitleElement = profileElement.querySelector(".profile__title");

const openPopupButton = profileElement.querySelector(".profile__edit");
const popupElement = document.querySelector(".popup");
const closePopupButton = popupElement.querySelector(".popup__close-button");
const savePopupButton = popupElement.querySelector(".popup__save-button");
const inputName = popupElement.querySelector(".popup__input-name");
const inputTitle = popupElement.querySelector(".popup__input-title");

function openPopup() {
  popupElement.classList.add("popup__opened"); //abre el popup
  inputName.value = profileNameElement.textContent;
  inputTitle.value = profileTitleElement.textContent;
}

function closePopup() {
  popupElement.classList.remove("popup__opened"); //cierra el popup
}

function saveChages(event) {
  event.preventDefault();
  profileNameElement.textContent = inputName.value;
  profileTitleElement.textContent = inputTitle.value;
  popupElement.classList.remove("popup__opened");
}

openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
savePopupButton.addEventListener("click", saveChages);
