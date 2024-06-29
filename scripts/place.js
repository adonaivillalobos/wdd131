// place.js
document.addEventListener('DOMContentLoaded', function () {
  const currentYear = new Date().getFullYear();
  document.getElementById('currentyear').textContent = currentYear;

  const lastModified = new Date(document.lastModified);
  document.getElementById('lastModified').textContent = `Last Updated: ${lastModified.toLocaleDateString()}`;

  // Windchill calculation function
  function calculateWindChill(temperature, windSpeed) {
      if (temperature > 10 || windSpeed <= 4.8) {
          return "N/A";
      }

      // Using Celsius for example
      const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
      return `${windChill.toFixed(1)} °C`;
  }

  // Set windchill factor
  const temperature = 31; // Example temperature in Celsius
  const windSpeed = 5; // Example wind speed in kph

  document.getElementById('windchill').textContent = calculateWindChill(temperature, windSpeed);
});