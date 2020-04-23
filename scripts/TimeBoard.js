class TimeBoard {
  constructor(icon, city, time) {
    this.icon = icon;
    this.city = city;
    this.time = time;
  }
  create() {
    const timeElement = document.createElement("div");
    timeElement.classList.add("timeBoard");

    const image = document.createElement("img");
    image.src = this.icon;

    const city = document.createElement("span");
    city.classList.add("current-city");
    city.textContent = this.city;

    const time = document.createElement("span");
    city.classList.add("current-city-time");
    time.textContent = this.time;
    timeElement.appendChild(image);
    timeElement.appendChild(city);
    timeElement.appendChild(time);
    return timeElement;
  }
}
