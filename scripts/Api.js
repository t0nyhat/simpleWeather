class Api {
  constructor(options) {
    this.options = options;
  }

  getInfo(latitude, longtitude) {
    return fetch(
      `https://cors-anywhere.herokuapp.com/https://api.weather.yandex.ru/v1/forecast?lat=${latitude}&lon=${longtitude}&extra=true`,
      {
        method: "GET",
        headers: this.options.headers
      }
    )
      .then(res => {
        if (res.ok) {
          return res.json();
        }

        // если ошибка, переходим в catch
        return Promise.reject(`Ошибка: ${res.status}`);
      })
      .then(result => {
        return result;
      })
      .catch(err => {
        console.log(err); // выведем ошибку в консоль
      });
  }


}

