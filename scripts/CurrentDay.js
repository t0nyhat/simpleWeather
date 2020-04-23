class CurrentDay {
  constructor(temperature, day, icon) {
    this.temperature = temperature;
    this.day = day;
    this.icon = icon;
    this.dayElement = this.create();
  }
  create() {
    const dayElement = document.createElement("li");
    dayElement.classList.add("current-day");

    const container = document.createElement("div");

    const temperature = document.createElement("div");
    temperature.classList.add("current-day-temperature");
    temperature.textContent = this.temperature;

    const day = document.createElement("div");
    day.classList.add("week-day");
    day.textContent = this.day;

    container.appendChild(temperature);
    container.appendChild(day);

    const icon = document.createElement("img");
    icon.classList.add("current-day-icon");
    icon.src = this.icon;

    dayElement.appendChild(container);
    dayElement.appendChild(icon);

    return dayElement;
  }
}
