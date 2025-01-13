export default class Section {
  constructor({ items, renderer }, cardsSelector) {
    this._items = items;
    this._renderer = renderer;
    this._cardsSelector = cardsSelector;
  }
  render() {
    this._items.array.forEach((item) => {
      this._renderer(item);
    });
  }
  addItem(element) {
    this._cardsSelector.prepend(element);
  }
}
