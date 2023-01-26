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
let date = document.querySelector("#date");
date.innerHTML = `${day} ${hour}:${minute}`;

function handleForecast() {
  let forecastElement = document.querySelector("#forecast");
  let days = ["Mon", "Tues", "Wed", "Thu"];
  let htmlForecast = `<div class="row">`;
  days.forEach(function (day) {
    htmlForecast =
      htmlForecast +
      `
<div class="col-2">
<div class="forecast-date">${day}</div>
<img
  src="https://ssl.gstatic.com/onebox/weather/64/cloudy.png"
  alt="Google image"
  width="42"
/>
<div class="forecast-temperature">
   <span class="max-temperature"> 24°</span>
  <span class="min-temperature"> 12° </span>
</div>
</div> `;
  });
  htmlForecast = htmlForecast + `</div>`;
  forecastElement.innerHTML = htmlForecast;
}

function showCurrent(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let conditionElement = document.querySelector("#condition");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");

  celsuisTemp = response.data.main.temp;

  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  conditionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  iconElement.setAttribute(
    "alt",
    `http://openweathermap.org/img/wn/${response.data.weather[0].description}@2x.png`
  );
}
function search(city) {
  let apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrent);
}
function handleSearch(event) {
  event.preventDefault();
  let inputElement = document.querySelector("#input-In");
  search(inputElement.value);
}
function handleFahrenheit(event) {
  event.preventDefault();
  celsuisElement.classList.remove("active");
  FaherenheitElement.classList.add("active");
  let fahrenheitFormula = (celsuisTemp * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitFormula);
}
function handlecelsuis(event) {
  event.preventDefault();
  celsuisElement.classList.add("active");
  FaherenheitElement.classList.remove("active");
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(celsuisTemp);
}

let celsuisTemp = null;
search("Stockholm");
handleForecast();

let form = document.querySelector("#search-form");
addEventListener("submit", handleSearch);

let FaherenheitElement = document.querySelector("#fahrenhet-link");
FaherenheitElement.addEventListener("click", handleFahrenheit);

let celsuisElement = document.querySelector("#celsuis-link");
celsuisElement.addEventListener("click", handlecelsuis);
