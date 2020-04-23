class Week {
  constructor(currentDay, days) {
    this.currentDay = currentDay;
    this.days = days;
  }
  create() {
    const weekElement = document.createElement("ul");
    weekElement.classList.add("week-forecast");

    weekElement.appendChild(this.currentDay.dayElement);
    this.days.forEach(e => weekElement.appendChild(e.dayElement));
    return weekElement;
  }
}
