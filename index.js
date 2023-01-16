//Feature 1
let currentData = new Date();

let days = ["Sun", "Mon", "Tues", "Wed", "Thur", "Fri", "Sat"];
let day = days[currentData.getDay()];
let hour = currentData.getHours();
let minute = currentData.getMinutes();
let season = document.querySelector("#season");
season.innerHTML = `${day} ${hour}:${minute}`;

//Feature 3
function searchCelsuis(event) {
  event.preventDefault();
  let temperature = document.querySelector(".currentTemp");
  temperature.innerHTML = "36°C";
}
let celsuisLink = document.querySelector("#celsius");
celsuisLink.addEventListener("click", searchCelsuis);

function searchFahrenheit(event) {
  event.preventDefault();
  let temperature = document.querySelector(".currentTemp");
  temperature.innerHTML = "38.8°F";
}
let fahrenheitLink = document.querySelector("#fah");
fahrenheitLink.addEventListener("click", searchFahrenheit);

//Homework
function standardSearch(event) {
  event.preventDefault();
  let country = document.querySelector("#country");
  let InputIN = document.querySelector("#inputIn");
  country.innerHTML = `${InputIN.value}`;
  let apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${InputIN.value}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showTemp);
}

function showTemp(response) {
  let temperature = Math.round(response.data.main.temp);
  let cityChange = document.querySelector("#cityChange");
  cityChange.innerHTML = `${temperature}`;
}

let LogIN = document.querySelector("#logIn");
LogIN.addEventListener("submit", standardSearch);

//second feature
function showFuture(position) {
  let lat = position.coords.latitude;
  let lon = position.coords.longitude;
  let apiKey = "a33b693cfbefd271b0ed075f9a8f65f0";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(showCurrent);
}
function showCurrent(response) {
  let showLocation = document.querySelector("#country");
  let displayTemp = response.data.name;
  showLocation.innerHTML = `${displayTemp}`;
  let temperature = Math.round(response.data.main.temp);
  let cityChange = document.querySelector("#cityChange");
  cityChange.innerHTML = `${temperature}`;
}

function showLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(showFuture);
}
let currentLocationButton = document.querySelector("#buttonID");
currentLocationButton.addEventListener("click", showLocation);
