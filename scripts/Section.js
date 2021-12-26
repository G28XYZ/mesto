class Section {
  constructor({ items, renderer }, selectorContainer) {
    this._items = items;
    this._renderer = renderer;
    this._container = selectorContainer;
  }

  rendered() {}

  addItem(element) {
    this._container.append(element);
  }
}

export default Section;
