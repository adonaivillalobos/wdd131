document.addEventListener("DOMContentLoaded", function() {
  // Set current year in footer
  document.getElementById('currentyear').textContent = new Date().getFullYear();

  // Set last modified date in footer
  const lastModified = new Date(document.lastModified);
  document.getElementById('lastModified').textContent = `Last Updated: ${lastModified.toLocaleDateString()}`;

  // Windchill calculation function
  function calculateWindChill(temperature, windSpeed) {
      if (temperature > 10 || windSpeed <= 4.8) {
          return "N/A";
      }

      // Using Celsius for example
      // Formula: Wind Chill = 13.12 + 0.6215T - 11.37V^0.16 + 0.3965TV^0.16
      const windChill = 13.12 + 0.6215 * temperature - 11.37 * Math.pow(windSpeed, 0.16) + 0.3965 * temperature * Math.pow(windSpeed, 0.16);
      return `${windChill.toFixed(1)} °C`;
  }

  // Set windchill factor
  const temperature = 31; // Example temperature in Celsius
  const windSpeed = 5; // Example wind speed in kph

  document.getElementById('windchill').textContent = calculateWindChill(temperature, windSpeed);
});
