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

// Array of Temple Objects
const temples = [
  {
    templeName: "Aba Nigeria",
    location: "Aba, Nigeria",
    dedicated: "2005, August, 7",
    area: 11500,
    imageUrl: "https://content.churchofjesuschrist.org/templesdsorg/bc/Temples/photo-gallery/aba-nigeria-temple.jpg"
  },
  {
    templeName: "Manti Utah",
    location: "Manti, Utah, United States",
    dedicated: "1888, May, 21",
    area: 74792,
    imageUrl: "https://content.churchofjesuschrist.org/templesdsorg/bc/Temples/photo-gallery/manti-utah-temple.jpg"
  },
  {
    templeName: "Payson Utah",
    location: "Payson, Utah, United States",
    dedicated: "2015, June, 7",
    area: 96630,
    imageUrl: "https://content.churchofjesuschrist.org/templesdsorg/bc/Temples/photo-gallery/payson-utah-temple.jpg"
  },
  {
    templeName: "Yigo Guam",
    location: "Yigo, Guam",
    dedicated: "2020, May, 2",
    area: 8601,
    imageUrl: "https://content.churchofjesuschrist.org/templesdsorg/bc/Temples/photo-gallery/yigo-guam-temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 156558,
    imageUrl: "https://content.churchofjesuschrist.org/templesdsorg/bc/Temples/photo-gallery/washington-dc-temple.jpg"
  },
  {
    templeName: "Lima Peru",
    location: "Lima, Peru",
    dedicated: "1986, January, 10",
    area: 9600,
    imageUrl: "https://content.churchofjesuschrist.org/templesdsorg/bc/Temples/photo-gallery/lima-peru-temple.jpg"
  },
  {
    templeName: "Mexico City Mexico",
    location: "Mexico City, Mexico",
    dedicated: "1983, December, 2",
    area: 116642,
    imageUrl: "https://content.churchofjesuschrist.org/templesdsorg/bc/Temples/photo-gallery/mexico-city-temple.jpg"
  },
  // Add new temple objects
  {
    templeName: "Salt Lake City Utah",
    location: "Salt Lake City, Utah, United States",
    dedicated: "1893, April, 6",
    area: 253015,
    imageUrl: "https://content.churchofjesuschrist.org/templesdsorg/bc/Temples/photo-gallery/salt-lake-city-temple.jpg"
  },
  {
    templeName: "Johannesburg South Africa",
    location: "Johannesburg, South Africa",
    dedicated: "1985, August, 24",
    area: 50000,
    imageUrl: "https://content.churchofjesuschrist.org/templesdsorg/bc/Temples/photo-gallery/johannesburg-south-africa-temple.jpg"
  },
  {
    templeName: "Rome Italy",
    location: "Rome, Italy",
    dedicated: "2019, March, 10",
    area: 43000,
    imageUrl: "https://content.churchofjesuschrist.org/templesdsorg/bc/Temples/photo-gallery/rome-italy-temple.jpg"
  }
];

// Function to create temple cards dynamically
function createTempleCards() {
  const main = document.querySelector('main');

  // Clear existing content
  main.innerHTML = '<h2>Home</h2>';

  temples.forEach(temple => {
    const templeCard = document.createElement('figure');

    templeCard.innerHTML = `
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Size:</strong> ${temple.area} sqft</p>
      </figcaption>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    main.appendChild(templeCard);
  });
}

// Call the function to create temple cards on page load
createTempleCards();

// Function to filter temples based on navigation clicks
document.querySelector('nav').addEventListener('click', (event) => {
  if (event.target.tagName === 'A') {
    event.preventDefault();
    filterTemples(event.target.getAttribute('href').substring(1));
  }
});

function filterTemples(filter) {
  const filteredTemples = temples.filter(temple => {
    const dedicationYear = parseInt(temple.dedicated.split(',')[0]);

    switch (filter) {
      case 'old':
        return dedicationYear < 1900;
      case 'new':
        return dedicationYear > 2000;
      case 'large':
        return temple.area > 90000;
      case 'small':
        return temple.area < 10000;
      default:
        return true;
    }
  });

  displayFilteredTemples(filteredTemples);
}

function displayFilteredTemples(filteredTemples) {
  const main = document.querySelector('main');
  main.innerHTML = '<h2>Filtered Temples</h2>';

  filteredTemples.forEach(temple => {
    const templeCard = document.createElement('figure');

    templeCard.innerHTML = `
      <figcaption>
        <h3>${temple.templeName}</h3>
        <p><strong>Location:</strong> ${temple.location}</p>
        <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
        <p><strong>Size:</strong> ${temple.area} sqft</p>
      </figcaption>
      <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
    `;

    main.appendChild(templeCard);
  });
}
