import PopUp from "./Popup.js";

export default class PopupWithImage extends PopUp {
  constructor(popupSelector) {
    super(popupSelector);
    this.image = this.popupSelector.querySelector(".popup__fullImg");
    this.title = this.popupSelector.querySelector(".popup__footer");
  }

  open(imgSrc, imgTitle) {
    super.open();
    this.image.src = imgSrc;
    this.title.textContent = imgTitle;
  }
}
