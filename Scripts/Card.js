class Card {
  constructor(title, link, template) {
    this.title = title;
    this.link = link;
    this.template = template;
    this._likeButton = this.template.quertySelector(".elements__like");
  }
  _getCardClone() {
    this.card = template
      .cloneNode(true)
      .content.quertySelector(".elements__container");
  }
  _handlelike() {
    this._likeButton.classList.toggle("elements__like-active");
  }
  _handleremovecard() {}
  _handleopenimage() {}
  _handlecloseimage() {}
  _setProperties() {}
  _addEventsListeners() {}
  generatecard() {}
}
