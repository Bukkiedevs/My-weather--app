let currentData = new Date();

let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[currentData.getDay()];
let hour = currentData.getHours();
if (hour < 10) {
  hour = `0${hour}`;
}
let minute = currentData.getMinutes();
if (minute < 10) {
  minute = `0${minute}`;
}
let season = document.querySelector("#season");
season.innerHTML = `${day} ${hour}:${minute}`;

function showCurrent(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  conditionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
}

let apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showCurrent);
