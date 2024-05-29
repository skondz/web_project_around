class Card{
  constructor (title, link, Template)
      this.title = title;
      this.link = link;
      this.template = template

  _getCardClone (){
      this.card = template.cloneNode(true).content.querySelector(".elements__container");
  }
  _handleLike(){}
  _handleDislike(){}
  _handleRemoveCard(){}
  _handleOpenImgCard(){}
  _setEventListeners(){}
  _setProperties(){}
  generateCard(){}
}