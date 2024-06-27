import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";

const popUpProfile = document.querySelector("#popup-profile");
const btnEdit = document.querySelector(".profile__edit");
const btnCloseProfile = document.querySelector("#close-profile");
const profileNameInput = document.querySelector("#input-name");
const profileAboutInput = document.querySelector("#input-title");
const profileName = document.querySelector(".profile__info");
const profileAbout = document.querySelector(".profile__title");
const btnProfileSave = document.querySelector(".popup__button-save");
const formProfile = document.querySelector("#profile-form");
const popUpAdd = document.querySelector("#popup-add");
const btnAdd = document.querySelector(".profile__add");
const btnCloseAdd = document.querySelector("#close-add");
const templateElement = document.querySelector(".template__elements");
const elementArea = document.querySelector(".elements");
const elementNameInput = document.querySelector("#input-img");
const elementLinkInput = document.querySelector("#input-link");
const formElements = document.querySelector("#elements-form");
const popupImg = document.querySelector("#popup-img");
const popupOverlays = document.querySelectorAll(".popup__overlay");

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

//open close profile profile
function openProfile() {
  popUpProfile.classList.toggle("popup__show");
  profileNameInput.value = profileName.textContent;
  profileAboutInput.value = profileAbout.textContent;
  document.addEventListener("keydown", handleEsc);
}

function closeAll() {
  popUpProfile.classList.remove("popup__show");
  elementLinkInput.value = "";
  elementNameInput.value = "";
  popUpAdd.classList.remove("popup__show");
  popupImg.classList.remove("popup__show");
  document.removeEventListener("keydown", handleEsc);
}

function handleEsc(evt) {
  if (evt.key === "Escape") {
    closeAll();
  }
}

//Editar profile
function saveChanges(evt) {
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  evt.preventDefault();
  closeAll();
}

btnEdit.addEventListener("click", openProfile);
btnCloseProfile.addEventListener("click", closeAll);
formProfile.addEventListener("submit", saveChanges);

//open close add
function openAdd() {
  popUpAdd.classList.add("popup__show");
  document.addEventListener("keydown", handleEsc);
}

btnAdd.addEventListener("click", openAdd);
btnCloseAdd.addEventListener("click", closeAll);

//Iniciar
initialCards.forEach(function (card) {
  const newElement = new Card(card.name, card.link);
  elementArea.append(newElement.generateCard());
});
function addNewCard(evt) {
  const newElement = new Card(elementNameInput.value, elementLinkInput.value);
  evt.preventDefault();
  elementArea.prepend(newElement.generateCard());

  closeAll();
}

formElements.addEventListener("submit", addNewCard);

popupOverlays.forEach((overlay) => {
  overlay.addEventListener("click", closeAll);
});

const validateForm = new FormValidator(formElements, {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
validateForm.enableValidation();
