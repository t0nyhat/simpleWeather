
const api = new Api({
  headers: {
    "X-Yandex-API-Key": "cd611519-cb6b-492e-92e2-9443134e42e4"
  }
});

let getPosition = function(options) {
  return new Promise(function(resolve, reject) {
    navigator.geolocation.getCurrentPosition(resolve, reject, options);
  });
};

function getTime(timeUnix) {
  this.unix_timestamp = timeUnix;
  this.date = new Date(unix_timestamp * 1000);
  this.hours =  this.date.getHours();
  this.minutes = "0" + this.date.getMinutes();
  this.formattedTime = this.hours + ":" + this.minutes.substr(-2);
  return this.formattedTime;
}

function worker(forecast) {


  let days = [];
  forecast.forecasts.slice(1, 7).forEach(e => {
    let dayName = Date.parse(e.date).toString("ddd");
    let temperature = e.parts.day.temp_avg;
    let ico = `https://yastatic.net/weather/i/icons/blueye/color/svg/${e.parts.day.icon}.svg`;

    days.push(new Day(temperature + "℃", ico, dayName));
  });

  let currentDay = new CurrentDay(
    `${forecast.fact.temp}℃`,
    Date.parse(forecast.forecasts[0].date).toString("dddd") +
      " " +
      Date.parse(forecast.forecasts[0].date).toString("dd"),
    `https://yastatic.net/weather/i/icons/blueye/color/svg/${forecast.fact.icon}.svg`
  );

  let timeboard = new TimeBoard(
    "./images/time.png",
    forecast.info.slug.toUpperCase(),
    getTime(forecast.now)
  );

  let findLocation = new FindLocation(
    forecast.info.slug[0].toUpperCase() + forecast.info.slug.slice(1)
  );

  let imageboard = new ImageBoard(
    [findLocation.create(), timeboard.create()],
    "images/pic.jpg"
  );
  
  let week = new Week(currentDay, days);
  let weatherContainer = new WeatherContainer([
    imageboard.create(),
    week.create()
  ]);

  document.querySelector(".wow-body").appendChild(weatherContainer.create());
  document.querySelector('.loader').remove();
}

getPosition()
  .then(position => {
    api.getInfo(position.latitude, position.longtitude).then(result => {
      worker(result);
    });
  })
  .catch(err => {
    console.error(err.message);
  });
