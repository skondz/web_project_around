const popUpProfile = document.querySelector("#popup-profile");
const btnEdit = document.querySelector(".profile__edit");
const btnCloseProfile = document.querySelector("#close-profile");
const profileNameInput = document.querySelector("#input-name");
const profileAboutInput = document.querySelector("#input-title");
const profileName = document.querySelector(".profile__info");
const profileAbout = document.querySelector(".profile__title");
const btnProfileSave = document.querySelector(".popup__button-save");
const formProfile = document.querySelector(".popup__form");
const popUpAdd = document.querySelector("#popup-add");
const btnAdd = document.querySelector(".profile__add");
const btnCloseAdd = document.querySelector("#close-add");

//open close profile profile
function openProfile() {
  popUpProfile.classList.toggle("popup__show");
  profileNameInput.value = profileName.textContent;
  profileAboutInput.value = profileAbout.textContent;
}
//Cerrar profile
function closeProfile() {
  popUpProfile.classList.remove("popup__show");
}

// cambiar profile
function saveChanges(evt) {
  evt.preventDefault();
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  closeProfile();
}

btnEdit.addEventListener("click", openProfile);
btnCloseProfile.addEventListener("click", closeProfile);
formProfile.addEventListener("submit", saveChanges);

//open close add
function openAdd() {
  popUpAdd.classList.toggle("popup__show");
}
function closeAdd() {
  popUpAdd.classList.remove("popup__show");
}
btnAdd.addEventListener("click", openAdd);
btnCloseAdd.addEventListener("click", closeAdd);
