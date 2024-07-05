// Get the current year
const currentYear = new Date().getFullYear();

// Update the copyright year
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date
const lastModified = document.lastModified;
document.getElementById('lastModified').textContent = `Last modified: ${lastModified}`;

// Get the navigation menu and hamburger button
const navMenu = document.querySelector('nav');
const hamburgerButton = document.createElement('button');
hamburgerButton.innerHTML = '&#9776;'; // Hamburger symbol
hamburgerButton.className = 'hamburger';

// Add the hamburger button to the header
document.querySelector('header').appendChild(hamburgerButton);

// Add event listener to the hamburger button
hamburgerButton.addEventListener('click', () => {
  navMenu.classList.toggle('open');
  hamburgerButton.innerHTML = navMenu.classList.contains('open') ? '&#10006;' : '&#9776;'; // Toggle between hamburger and X symbols
});

// Hide the navigation menu on larger screens
window.addEventListener('resize', () => {
  if (window.innerWidth >= 768) {
    navMenu.classList.remove('open');
    hamburgerButton.style.display = 'none';
  } else {
    hamburgerButton.style.display = 'block';
  }
});