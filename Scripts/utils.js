import { Card } from "./Card.js";
const popUpProfile = document.querySelector("#popup-profile");
const profileNameInput = document.querySelector("#input-name");
const profileAboutInput = document.querySelector("#input-title");
const elementLinkInput = document.querySelector("#input-link");
const elementNameInput = document.querySelector("#input-img");
const popUpAdd = document.querySelector("#popup-add");
const popupImg = document.querySelector("#popup-img");
const profileName = document.querySelector(".profile__info");
const profileAbout = document.querySelector(".profile__title");

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
function saveChanges(evt) {
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  evt.preventDefault();
  closeAll();
}

export { openProfile, closeAll, handleEsc, saveChanges };
