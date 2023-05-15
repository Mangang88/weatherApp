const apiKey = "911c309ca52ad7b39076cdc966d8c4f9";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather";

navigator.geolocation.getCurrentPosition(success, error);

function success(position) {
  const lat = position.coords.latitude;
  const lon = position.coords.longitude;
  const url = `${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}`;
  
  fetch(url)
    .then(response => response.json())
    .then(data => {
      console.log(data);
      const location = data.name + ", " + "India";
      const temperature = Math.round(data.main.temp - 273.15) + "°C";
      const description = data.weather[0].description;
      const humidity = "Humidity: " + data.main.humidity + "%";

      document.getElementById("location").textContent = location;
      document.getElementById("temperature").textContent = temperature;
      document.getElementById("description").textContent = description;
      document.getElementById("humidity").textContent = humidity;
    })
    .catch(error => console.error(error));
}

function error() {
  console.log('Unable to retrieve your location');
}
