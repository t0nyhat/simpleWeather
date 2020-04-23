class WeatherContainer {
  constructor(elements) {
    this.elements = elements;
  }
  create() {
    const container = document.createElement("div");
    container.classList.add("weather-container");
    this.elements.forEach(e => container.appendChild(e));
    return container;
  }
}
