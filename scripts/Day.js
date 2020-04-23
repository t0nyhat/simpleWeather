class Day {
  constructor(temperature, icon, dayName) {
    this.temperature = temperature;
    this.icon = icon;
    this.dayName = dayName;
    this.dayElement = this.create();
  }
  create() {
    const dayElement = document.createElement("li");
    dayElement.classList.add("day");

    const innerContainer = document.createElement("div");
    innerContainer.classList.add("inner");

    const day = document.createElement("div");
    day.classList.add("week-day");

    const icon = document.createElement("img");
    icon.classList.add("climacon");

    const temperature = document.createElement("p");
    temperature.classList.add("week-day-temperature");

    day.textContent = this.dayName;
    temperature.textContent = `${this.temperature}`;
    icon.src = this.icon;

    innerContainer.appendChild(day);
    innerContainer.appendChild(icon);
    innerContainer.appendChild(temperature);
    dayElement.appendChild(innerContainer);
    return dayElement;
  }
}
