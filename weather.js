const cityName = document.getElementById('cityInput');
const weatherForm = document.getElementById('weatherForm');
const corApiUrl = 'http://api.openweathermap.org/geo/1.0/direct?q=';
const weatherApiUrl = 'https://api.openweathermap.org/data/2.5/weather';
 // Replace this with your actual API key
const apiUrl=process.env.API_URL;
const getCoordinates = async (city) => {
  try {
    const data = await fetch(`${corApiUrl}${city}&limit=5&appid=${apiUrl}`);
    const response = await data.json(); // Add await here
    console.log(response)
    const lat = response[0].lat;
    const lon = response[0].lon;
    getWeather(lat, lon);
    console.log(lat, lon);
    console.log(response);
    return response;
  } catch (error) {
    console.error('Error fetching coordinates:', error);
    return null;
  }
};

const getWeather = async (lat, lon) => {
  try {
    const weatherData = await fetch(`${weatherApiUrl}?lat=${lat}&lon=${lon}&appid=${apiUrl}`); // Fix the weather API URL
    const responseWeather = await weatherData.json(); // Add await here
    console.log(responseWeather);
  } catch (error) {
    console.error('Error fetching weather data:', error);
  }
};
weatherForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const city = cityName.value;
  getCoordinates(city);
});
