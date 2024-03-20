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
const formElement = document.querySelector("#elements-form");
const popupImg = document.querySelector("#popup-img");
const btnCloseImg = document.querySelector("#close-img");

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
}
function closeProfile() {
  popUpProfile.classList.remove("popup__show");
}

//Editar profile
function saveChanges(evt) {
  profileName.textContent = profileNameInput.value;
  profileAbout.textContent = profileAboutInput.value;
  evt.preventDefault();
  closeProfile();
}

btnEdit.addEventListener("click", openProfile);
btnCloseProfile.addEventListener("click", closeProfile);
formProfile.addEventListener("submit", saveChanges);

//open close add
function openAdd() {
  popUpAdd.classList.add("popup__show");
}
function closeAdd() {
  elementLinkInput.value = "";
  elementNameInput.value = "";

  popUpAdd.classList.remove("popup__show");
}
btnAdd.addEventListener("click", openAdd);
btnCloseAdd.addEventListener("click", closeAdd);

//generador

function createElement(name, link) {
  const element = templateElement
    .cloneNode(true)
    .content.querySelector(".elements__container");
  const elementImage = element.querySelector(".elements__place-image");
  const elementName = element.querySelector(".elements__text");
  const likeBtn = element.querySelector(".elements__like");
  const imgBtn = element.querySelector(".elements__place-image");
  const fullImg = document.querySelector(".popup__img");
  const footerimg = document.querySelector(".popup__footer");
  ///Crea card
  elementImage.src = link;
  elementName.textContent = name;
  ///Like
  likeBtn.addEventListener("click", function () {
    likeBtn.classList.toggle("elements__like-active");
  });
  ///popup
  imgBtn.addEventListener("click", function () {
    fullImg.src = elementImage.src;
    footerimg.textContent = elementName.textContent;
    popupImg.classList.toggle("popup__show");
  });
  function closeImg() {
    popupImg.classList.remove("popup__show");
  }
  btnCloseImg.addEventListener("click", closeImg);

  return element;
}

//Iniciar
initialCards.forEach(function (card) {
  const newElement = createElement(card.name, card.link);
  elementArea.append(newElement);
});
function addNewCard(evt) {
  const newElement = createElement(
    elementNameInput.value,
    elementLinkInput.value
  );
  evt.preventDefault();
  elementArea.prepend(newElement);

  closeAdd();
}

formElement.addEventListener("submit", addNewCard);
