// Function to convert Celsius to Fahrenheit
function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

// Function to calculate wind chill in Celsius
function calculateWindChill(tempCelsius, windSpeedMps) {
    const tempFahrenheit = celsiusToFahrenheit(tempCelsius);
    const windSpeedMph = windSpeedMps * 2.23694; // Convert m/s to mph

    // Using the wind chill formula for Fahrenheit
    if (windSpeedMph > 3 && tempFahrenheit <= 50) {
        const windChillFahrenheit = 35.74 + 0.6215 * tempFahrenheit - 35.75 * Math.pow(windSpeedMph, 0.16) + 0.4275 * tempFahrenheit * Math.pow(windSpeedMph, 0.16);
        return ((windChillFahrenheit - 32) * 5) / 9; // Convert back to Celsius
    }
    return tempCelsius;
}

// Function to fetch weather data
async function fetchWeather() {
    try {
        const response = await fetch('https://api.openweathermap.org/data/2.5/weather?q=Maracaibo&appid=YOUR_API_KEY&units=metric');
        const data = await response.json();
        displayWeather(data);
    } catch (error) {
        console.error('Error fetching weather data:', error);
    }
}

// Function to display weather data
function displayWeather(data) {
    const tempCelsius = data.main.temp;
    const tempFahrenheit = celsiusToFahrenheit(tempCelsius).toFixed(2);
    const windSpeedMps = data.wind.speed; // Wind speed in meters per second
    const windChillCelsius = calculateWindChill(tempCelsius, windSpeedMps).toFixed(2);
    const conditions = data.weather[0].description;

    const weatherListMobile = document.getElementById('weather-list');
    const weatherListDesktop = document.getElementById('weather-list-desktop');
    const weatherIconMobile = document.getElementById('weather-icon');
    const weatherIconDesktop = document.getElementById('weather-icon-desktop');

    const weatherItems = `
        <li>Temperature: ${tempCelsius}°C / ${tempFahrenheit}°F</li>
        <li>Conditions: ${conditions}</li>
        <li>Wind Speed: ${windSpeedMps} m/s</li>
        <li>Wind Chill: ${windChillCelsius}°C</li>
    `;

    weatherListMobile.innerHTML = weatherItems;
    weatherListDesktop.innerHTML = weatherItems;

    const iconUrl = `http://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    weatherIconMobile.src = iconUrl;
    weatherIconDesktop.src = iconUrl;
}

// Call fetchWeather to display weather on load
fetchWeather();
