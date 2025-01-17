import "./styles/index.css";
import { Card } from "./scripts/Card.js";
import { FormValidator } from "./scripts/FormValidator.js";
import {
  openProfile,
  closeAll,
  saveChanges,
  handleEsc,
} from "./scripts//utils.js";
import PopupWithForm from "./scripts/PopupWithForm.js";

const btnEdit = document.querySelector(".profile__edit");
const btnCloseProfile = document.querySelector("#close-profile");
const formProfile = document.querySelector("#profile-form");
const btnAdd = document.querySelector(".profile__add");
const btnCloseAdd = document.querySelector("#close-add");
const elementArea = document.querySelector(".elements");
const elementNameInput = document.querySelector("#input-img");
const elementLinkInput = document.querySelector("#input-link");
const formElements = document.querySelector("#elements-form");
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

const popupCards = new PopupWithForm("#popup-add", (values) => {
  console.log(values);
});
popupCards.setEventListeners();

const popupEditProfile = new PopupWithForm("#popup-profile", (values) => {
  console.log(values);
});
popupEditProfile.setEventListeners();

btnEdit.addEventListener("click", () => {
  popupEditProfile.open();
});

btnCloseProfile.addEventListener("click", closeAll);
formProfile.addEventListener("submit", saveChanges);

btnAdd.addEventListener("click", () => {
  popupCards.open();
});
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
  document.removeEventListener("keydown", handleEsc);
});

const validateForm1 = new FormValidator(formElements, {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
const validateForm2 = new FormValidator(formProfile, {
  formSelector: ".popup__form",
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
});
validateForm1.enableValidation();
validateForm2.enableValidation();
export { addNewCard };

const getUserInfo = () => {
  return fetch("https://around-api.es.tripleten-services.com/v1/cards/", {
    headers: {
      authorization: "5cb824c7-18ee-4a7f-a0d4-afa785bcbcee",
    },
  })
    .then((res) => res.json())
    .then((result) => {
      console.log(result);
    });
};
getUserInfo();
