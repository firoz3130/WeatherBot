require('dotenv').config();
const weatherForm = document.getElementById('weatherForm');
const weatherApi=process.env.API_URL;
const min_temperature = document.getElementsByClassName('min_temperature')[0];
const max_temperature=document.getElementsByClassName('max_temperature')[0];
const locationElement = document.getElementsByClassName('location')[0];
const humidityElement = document.getElementsByClassName('humidity')[0];
const windElement = document.getElementsByClassName('wind')[0];
const description=document.getElementById('weatherType')
const apiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const currentWeatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}";

weatherForm.addEventListener('submit', async (e) => {
  e.preventDefault();
  const cityName = document.getElementById('cityInput').value;
  const url = apiUrl + cityName + '&limit=1&appid=' + weatherApi;
  const response = await fetch(url);
  const json = await response.json();
  const lat = json[0]['lat'];
  const lon = json[0]['lon'];
  const country=json[0]['country']
  const state=json[0]['state']
  const weatherUrl = currentWeatherUrl.replace('{lat}', lat).replace('{lon}', lon).replace('{API key}', weatherApi);
  const currentResponse = await fetch(weatherUrl);
  const currentJson = await currentResponse.json();
  const whatWeatherNow = currentJson['weather'][0]['description'];
  const temp = (currentJson['main']['temp'] - 273.15).toFixed(2);
  const feels_like = (currentJson['main']['feels_like'] - 273.15).toFixed(2);
  const temp_min = (currentJson['main']['temp_min'] - 273.15).toFixed(2);
  const temp_max = (currentJson['main']['temp_max'] - 273.15).toFixed(2);
  const pressure = currentJson['main']['pressure'];
  const humidity = currentJson['main']['humidity'];
  const wind = ((currentJson['wind']['speed']) * 1.852).toFixed(2);

  min_temperature.innerHTML = "Min: " + temp_min + "°C";
  max_temperature.innerHTML = "Max: " + temp_max + "°C";
  locationElement.innerHTML = cityName+","+state+","+country;
  humidityElement.innerHTML = "Humidity: " + humidity + "%";
  windElement.innerHTML = "Wind: " + wind + " km/h";
  description.innerHTML=whatWeatherNow;

  console.log(whatWeatherNow, humidity, pressure, temp_max, temp_min);
  console.log(feels_like + " and wind is " + wind + " km/hr");
  console.log("country is ",country," ",temp);
  console.log(json[0]['lat']);
  console.log(json[0]['lon']);
  console.log(cityName);
});
