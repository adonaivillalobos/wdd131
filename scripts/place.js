document.addEventListener('DOMContentLoaded', () => {
    const currentYear = document.getElementById('currentyear');
    currentYear.textContent = new Date().getFullYear();
  
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = document.lastModified;
  
    // Define static values for temperature and wind speed
    const temperature = 5; // in °C
    const windSpeed = 10; // in km/h
  
    // Select the element where we'll display the windchill factor
    const windChillElement = document.getElementById('windchill');
  
    // Check if conditions are met for viable wind chill calculation
    if (temperature <= 10 && windSpeed > 4.8) {
      windChillElement.textContent = `Windchill: ${calculateWindChill(temperature, windSpeed)} °C`;
    } else {
      windChillElement.textContent = 'N/A';
    }
  
    // Function to calculate windchill factor
    function calculateWindChill(temp, wind) {
      return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }
  });