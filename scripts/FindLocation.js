class FindLocation {
  constructor(city) {
    this.city = city;
  }
  create() {
    const element = document.createElement("form");
    element.classList.add("find-location");

    const input = document.createElement("input");
    input.classList.add("input-find-location");
    input.type = "text";
    input.placeholder = "";
    input.value = this.city;

    element.appendChild(input);

    return element;
  }
}
