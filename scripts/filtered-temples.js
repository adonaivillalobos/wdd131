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

// Array of temple objects
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
        dedicated: "2022, May, 2",
        area: 6861,
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
        area: 9000,
        imageUrl: "https://content.churchofjesuschrist.org/templesdsorg/bc/Temples/photo-gallery/lima-peru-temple.jpg"
    },
    {
        templeName: "Mexico City Mexico",
        location: "Mexico City, Mexico",
        dedicated: "1983, December, 2",
        area: 116642,
        imageUrl: "https://content.churchofjesuschrist.org/templesdsorg/bc/Temples/photo-gallery/mexico-city-mexico-temple.jpg"
    },
    {
        templeName: "Rome Italy",
        location: "Rome, Italy",
        dedicated: "2019, March, 10",
        area: 43000,
        imageUrl: "https://content.churchofjesuschrist.org/templesdsorg/bc/Temples/photo-gallery/rome-italy-temple.jpg"
    },
    {
        templeName: "Hong Kong China",
        location: "Hong Kong, China",
        dedicated: "1996, May, 26",
        area: 62000,
        imageUrl: "https://content.churchofjesuschrist.org/templesdsorg/bc/Temples/photo-gallery/hong-kong-china-temple.jpg"
    }
];

// Function to create temple cards dynamically
function createTempleCards(filterFunc = null) {
    const main = document.querySelector('main');
    main.innerHTML = '<h2>Home</h2>'; // Reset the content of the mainelement

    const filteredTemples = filterFunc? temples.filter(filterFunc) : temples;

    filteredTemples.forEach(temple => {
        const templeCard = document.createElement('figure');
        templeCard.innerHTML = `
            <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
            <figcaption>
                <h3>${temple.templeName}</h3>
                <p><strong>Location:</strong> ${temple.location}</p>
                <p><strong>Dedicated:</strong> ${temple.dedicated}</p>
                <p><strong>Size:</strong> ${temple.area} sqft</p>
            </figcaption>
        `;
        main.appendChild(templeCard);
    });
}

// Function to filter temples based on criteria
function filterTemples(criterion) {
    switch (criterion) {
        case 'old':
            return temple => new Date(temple.dedicated).getFullYear() < 1900;
        case 'new':
            return temple => new Date(temple.dedicated).getFullYear() >= 2000;
        case 'large':
            return temple => temple.area >= 90000;
        case 'all':
            return temple => temple.area < 10000;
        default:
            return null;
    }
}

// Event listeners for navigation
document.querySelector('nav').addEventListener('click', (event) => {
    if (event.target.tagName === 'A') {
        event.preventDefault();
        const criterion = event.target.getAttribute('href').substring(1);
        createTempleCards(filterTemples(criterion));
    }
});

// Initialize page with all temples
createTempleCards();

// Remove duplicate code
// Remove the following code as it is already present at the top of the script
// document.getElementById('currentyear').textContent = new Date().getFullYear();
// document.getElementById('lastModified').textContent = `Last modified: ${document.lastModified}`;

// Remove the following code as it is already present at the top of the script
// hamburgerButton.addEventListener('click', () => {
//     navMenu.classList.toggle('open');
//     hamburgerButton.innerHTML = navMenu.classList.contains('open')? '&#10006;' : '&#9776;';
// });

// window.addEventListener('resize', () => {
//     if (window.innerWidth >= 768) {
//         navMenu.classList.remove('open');
//         hamburgerButton.style.display = 'none';
//     } else {
//         hamburgerButton.style.display = 'block';
//     }
// });