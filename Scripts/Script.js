const profileNameElement = document.querySelector(".profile__info");
const profileTitleElement = document.querySelector(".profile__title");
const openPopupButton = document.querySelector(".profile__edit");
const popupElement = document.querySelector(".popup");
const closePopupButton = popupElement.querySelector(".popup__close-button");
const savePopupButton = popupElement.querySelector(".popup__save-button");
const inputName = popupElement.querySelector(".popup__input-name");
const inputTitle = popupElement.querySelector(".popup__input-title");
const formElement = popupElement.querySelector(".popup__form");

function openPopup() {
  popupElement.classList.add("popup__opened"); //abre el popup
  inputName.value = profileNameElement.textContent;
  inputTitle.value = profileTitleElement.textContent;
}
function closePopup() {
  popupElement.classList.remove("popup__opened"); //cierra el popup
}
function saveChanges(event) {
  event.preventDefault();
  profileNameElement.textContent = inputName.value;
  profileTitleElement.textContent = inputTitle.value;
  popupElement.classList.remove("popup__opened"); //cierra el popup
}
openPopupButton.addEventListener("click", openPopup);
closePopupButton.addEventListener("click", closePopup);
formElement.addEventListener("submit", saveChanges);

const initialCards = [
  {
    name: "Valle de Yosemite",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/yosemite.jpg",
  },
  {
    name: "Lago Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lake-louise.jpg",
  },
  {
    name: "Montañas Calvas",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/latemar.jpg",
  },
  {
    name: "Parque Nacional de la Vanoise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/new-markets/WEB_sprint_5/ES/lago.jpg",
  },
];
