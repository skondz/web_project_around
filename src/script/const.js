import PopupWithImage from "./PopupWithImage.js";
import PopupWithForm from "./PopupWithForm.js";
import PopupWithConfirmation from "./PopupWithConfirmation.js";
import {
  formSubmitHandler,
  formSubmitHandlerAdd,
  formSubmitHandlerAvatar,
} from "./index.js";
import UserInfo from "./UserInfo.js";
export const cardsContent = [
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

export const formValidaProfile = document.querySelector(".popup__form");
export const formValidaAvatar = document.querySelector("#popup__avatar");
export const formValidaPlace = document.querySelector(".popup__form-add");
export const buttonAdd = document.querySelector(".profile__button-add");
export const nameProfession = document.querySelector(".popup__input-name");
export const profesion = document.querySelector(".popup__input-profesion");
export const buttonEdit = document.querySelector(".profile__button-edit");
export const imagePopup = new PopupWithImage(".popup_image");
export const avatar = document.querySelector(".profile__avatar");
export const profileName = document.querySelector(".profile__name");
export const profileAbout = document.querySelector(".profile__profession");
export const buttonSubmitCard = document.querySelector("#submit__add");
export const popupSubmitProfile = document.querySelector("#popup__profile");
export const popupSubmitAvatar = document.querySelector("#submit__avatar");
export const headerAvatar = document.querySelector(".profile__buttonAvatar");
export const popupWithFormAdd = new PopupWithForm(
  "#popup__add",
  formSubmitHandlerAdd
);
export const popupWithFormEdit = new PopupWithForm(
  "#popup__edit",
  formSubmitHandler
);
export const popupWithFormAvatar = new PopupWithForm(
  "#popup__avatar",
  formSubmitHandlerAvatar
);
export const userInfo = new UserInfo({
  nameSelector: ".profile__name",
  jobSelector: ".profile__profession",
});

export const popupSelector = "#popup__confirmacion";
export const miPopupConConfirmacion = new PopupWithConfirmation(popupSelector);
