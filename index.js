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
let minute = currentData.getMinutes();
let season = document.querySelector("#season");
season.innerHTML = `${day} ${hour}:${minute}`;

function showCurrent(response) {
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let cityElement = document.querySelector("#city");
  cityElement.innerHTML = response.data.name;
  let conditionElement = document.querySelector("#condition");
  conditionElement.innerHTML = response.data.weather[0].description;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = response.data.main.humidity;
  let windElement = document.querySelector("#wind");
  windElement.innerHTML = Math.round(response.data.wind.speed);
  console.log(response.data);
}

let apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Stockholm&appid=${apiKey}&units=metric`;
axios.get(apiUrl).then(showCurrent);
