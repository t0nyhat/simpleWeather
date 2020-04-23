class ImageBoard {
  constructor(elements, image) {
    this.elements = elements;
    this.image = image;
  }
  create() {
    const board = document.createElement("div");
    board.classList.add("imageboard");
    board.style.backgroundImage = `url('${this.image}')`;
    this.elements.forEach(e => board.appendChild(e));
    return board;
  }
}
