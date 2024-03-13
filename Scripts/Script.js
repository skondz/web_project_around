const popUp = document.querySelector("#popup-profile");
const btnEdit = document.querySelector(".profile__edit");
const btnClose = document.querySelector(".popup__close-button");
const profileNameInput = document.querySelector("#input-name");
const profileAboutInput = document.querySelector("#input-title");
const profileName = document.querySelector(".profile__info");
const profileAbout = document.querySelector(".profile__title");
const btnProfileSave = document.querySelector(".popup__button-save");
const formProfile = document.querySelector(".popup__form");
// abrir popup profile
function openClosePopup() {
  popUp.classList.toggle("popup__show");
  profileNameInput.value = profileName.textContent;
  profileAboutInput.value = profileAbout.textContent;
}
// cambiar profile
function saveChanges(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  openPopUp();
}

btnEdit.addEventListener("click", openClosePopup);
btnClose.addEventListener("click", openClosePopup);
formProfile.addEventListener("submit", saveChanges);
