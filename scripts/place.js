document.addEventListener('DOMContentLoaded', () => {
    const currentYear = document.getElementById('currentyear');
    currentYear.textContent = new Date().getFullYear();
  
    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = document.lastModified;
  
    // Define static values for temperature and wind speed
    const temperature = 25; // in °C
    const windSpeed = 15; // in km/h
  
    // Calculate and display windchill factor
    const windChillElement = document.getElementById('windchill');
    windChillElement.textContent = `Windchill: ${calculateWindChill(temperature, windSpeed)} °C`;
  
    // Function to calculate windchill factor
    function calculateWindChill(temp, wind) {
      return 13.12 + 0.6215 * temp - 11.37 * Math.pow(wind, 0.16) + 0.3965 * temp * Math.pow(wind, 0.16);
    }
  });