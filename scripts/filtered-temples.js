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
  hamburgerButton.innerHTML = navMenu.classList.contains('open')? '&#10006;' : '&#9776;'; // Toggle between hamburger and X symbols
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
      imageUrl: "aba-nigeria-temple.jpg" // Assuming images are in the same directory
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "manti-utah-temple.jpg" // Assuming images are in the same directory
    },
    {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17500,
      imageUrl: "accra-ghana-temple.jpg"
    },
    {
      templeName: "Asunción Paraguay",
      location: "Asunción, Paraguay",
      dedicated: "2002, May, 15",
      area: 11500,
      imageUrl: "asuncion-paraguay-temple.jpg"
    },
    {
      templeName: "Atlanta Georgia",
      location: "Atlanta, Georgia, United States",
      dedicated: "1983, June, 4",
      area: 37000,
      imageUrl: "atlanta-georgia-temple.jpg"
    },
    {
      templeName: "Bogotá Colombia",
      location: "Bogotá, Colombia",
      dedicated: "1999, April, 26",
      area: 53500,
      imageUrl: "bogota-colombia-temple.jpg"
    },
    {
      templeName: "Boston Massachusetts",
      location: "Boston, Massachusetts, United States",
      dedicated: "2000, October, 1",
      area: 69500,
      imageUrl: "boston-massachusetts-temple.jpg"
    },
    {
      templeName: "Buenos Aires Argentina",
      location: "Buenos Aires, Argentina",
      dedicated: "1986, January, 17",
      area: 30000,
      imageUrl: "buenos-aires-argentina-temple.jpg"
    },
    {
      templeName: "Calgary Alberta",
      location: "Calgary, Alberta, Canada",
      dedicated: "2012, October, 28",
      area: 33000,
      imageUrl: "calgary-alberta-temple.jpg"
    },
    {
      templeName: "Caracas Venezuela",
      location: "Caracas, Venezuela",
      dedicated: "2000, August, 20",
      area: 15500,
      imageUrl: "caracas-venezuela-temple.jpg"
    },
    {
      templeName: "Chicago Illinois",
      location: "Chicago, Illinois, United States",
      dedicated: "1985, August, 9",
      area: 37500,
      imageUrl: "chicago-illinois-temple.jpg"
    },
    {
      templeName: "Ciudad Juárez México",
      location: "Ciudad Juárez, México",
      dedicated: "2000, March, 26",
      area: 11500,
      imageUrl: "ciudad-juarez-mexico-temple.jpg"
    },
    {
      templeName: "Columbia South Carolina",
      location: "Columbia, South Carolina, United States",
      dedicated: "1999, October, 31",
      area: 10500,
      imageUrl: "columbia-south-carolina-temple.jpg"
    },
    {
      templeName: "Copenhagen Denmark",
      location: "Copenhagen, Denmark",
      dedicated: "1985, April, 15",
      area: 15000,
      imageUrl: "copenhagen-denmark-temple.jpg"
    },
    {
      templeName: "Curitiba Brazil",
      location: "Curitiba, Brazil",
      dedicated: "2008, June, 1",
      area: 11500,
      imageUrl: "curitiba-brazil-temple.jpg"
    },
    {
      templeName: "Dallas Texas",
      location: "Dallas, Texas, United States",
      dedicated: "1984, December, 16",
      area: 37000,
      imageUrl: "dallas-texas-temple.jpg"
    },
    {
      templeName: "Denver Colorado",
      location: "Denver, Colorado, United States",
      dedicated: "1986, October, 12",
      area: 37000,
      imageUrl: "denver-colorado-temple.jpg"
    },
    {
      templeName: "Detroit Michigan",
      location: "Detroit, Michigan, United States",
      dedicated: "1999, October, 10",
      area: 10500,
      imageUrl: "detroit-michigan-temple.jpg"
    },
    {
      templeName: "Draper Utah",
      location: "Draper, Utah, United States",
      dedicated: "2009, March, 21",
      area: 160000,
      imageUrl: "draper-utah-temple.jpg"
    },
    {
      templeName: "Fort Lauderdale Florida",
      location: "Fort Lauderdale, Florida, United States",
      dedicated: "2014, October, 12",
      area: 30000,
      imageUrl: "fort-lauderdale-florida-temple.jpg"
    },
    {
      templeName: "Frankfurt Germany",
      location: "Frankfurt, Germany",
      dedicated: "1987, September, 10",
      area: 15000,
      imageUrl: "frankfurt-germany-temple.jpg"
    },
    {
      templeName: "Freiberg Germany",
      location: "Freiberg, Germany",
      dedicated: "1985, June, 29",
      area: 10000,
      imageUrl: "freiberg-germany-temple.jpg"
    },
    {
      templeName: "Guadalajara México",
      location: "Guadalajara, México",
      dedicated: "1994, November, 20",
      area: 11500,
      imageUrl: "guadalajara-mexico-temple.jpg"
    },
    {
      templeName: "Guatemala City Guatemala",
      location: "Guatemala City, Guatemala",
      dedicated: "1984, December, 16",
      area: 11500,
      imageUrl: "guatemala-city-guatemala-temple.jpg"
    },
    {
      templeName: "Hamilton New Zealand",
      location: "Hamilton, New Zealand",
      dedicated: "1958, April, 20",
      area: 11500,
      imageUrl: "hamilton-new-zealand-temple.jpg"
    },
    {
      templeName: "Helsinki Finland",
      location: "Helsinki, Finland",
      dedicated: "2006, October, 1",
      area: 10500,
      imageUrl: "helsinski-finland-temple.jpg"
    },
    {
      templeName: "Hong Kong China",
      location: "Hong Kong, China",
      dedicated: "1996, May, 26",
      area: 30000,
      imageUrl: "hong-kong-china-temple.jpg"
    },
    {
      templeName: "Houston Texas",
      location: "Houston, Texas, United States",
      dedicated: "2000, August, 27",
      area: 32000,
      imageUrl: "houston-texas-temple.jpg"
    },
    {
      templeName: "Indianapolis Indiana",
      location: "Indianapolis, Indiana, United States",
      dedicated: "2015, July, 17",
      area: 35000,
      imageUrl: "indianapolis-indiana-temple.jpg"
    },
    {
      templeName: "Johannesburg South Africa",
      location: "Johannesburg, South Africa",
      dedicated: "1982, August, 24",
      area: 19000,
      imageUrl: "johannesburg-south-africa-temple.jpg"
    },
    {
      templeName: "Jordan River Utah",
      location: "South Jordan, Utah, United States",
      dedicated: "1981, November, 16",
      area: 148000,
      imageUrl: "jordan-river-utah-temple.jpg"
    },
    {
      templeName: "Kyiv Ukraine",
      location: "Kyiv, Ukraine",
      dedicated: "2010, August, 29",
      area: 22000,
      imageUrl: "kyiv-ukraine-temple.jpg"
    },
    {
      templeName: "Las Vegas Nevada",
      location: "Las Vegas, Nevada, United States",
      dedicated: "1989, December, 16",
      area: 80000,
      imageUrl: "las-vegas-nevada-temple.jpg"
    },
    {
      templeName: "Lima Peru",
      location: "Lima, Peru",
      dedicated: "1986, January, 10",
      area: 9000,
      imageUrl: "lima-peru-temple.jpg"
    },
    {
      templeName: "London England",
      location: "London, England",
      dedicated: "1958, September, 7",
      area: 21000,
      imageUrl: "london-england-temple.jpg"
    },
    {
      templeName: "Los Angeles California",
      location: "Los Angeles, California, United States",
      dedicated: "1956, March, 11",
      area: 19000,
      imageUrl: "los-angeles-california-temple.jpg"
    },
    {
      templeName: "Madrid Spain",
      location: "Madrid, Spain",
      dedicated: "1999, March, 21",
      area: 11500,
      imageUrl: "madrid-spain-temple.jpg"
    },
    {
      templeName: "Manaus Brazil",
      location: "Manaus, Brazil",
      dedicated: "2012, June, 10",
      area: 32000,
      imageUrl: "manaus-brazil-temple.jpg"
    },
    {
      templeName: "México City México",
      location: "México City, México",
      dedicated: "1983, December, 2",
      area: 11500,
      imageUrl: "mexico-city-mexico-temple.jpg"
    },
    {
      templeName: "Montréal Québec",
      location: "Montréal, Québec, Canada",
      dedicated: "2000, June, 4",
      area: 10500,
      imageUrl: "montreal-quebec-temple.jpg"
    },
    {
      templeName: "Montevideo Uruguay",
      location: "Montevideo, Uruguay",
      dedicated: "2001, March, 18",
      area: 10500,
      imageUrl: "montevideo-uruguay-temple.jpg"
    },
    {
      templeName: "Nashville Tennessee",
      location: "Nashville, Tennessee, United States",
      dedicated: "2000, May, 21",
      area: 10500,
      imageUrl: "nashville-tennessee-temple.jpg"
    },
    {
      templeName: "Newport Beach California",
      location: "Newport Beach, California, United States",
      dedicated: "2005, August, 28",
      area: 17000,
      imageUrl: "newport-beach-california-temple.jpg"
    },
    {
      templeName: "Nuku'alofa Tonga",
      location: "Nuku'alofa, Tonga",
      dedicated: "1983, September, 4",
      area: 11500,
      imageUrl: "nuku-alofa-tonga-temple.jpg"
  },
  {
    templeName: "Oklahoma City Oklahoma",
    location: "Oklahoma City, Oklahoma, United States",
    dedicated: "2002, July, 30",
    area: 10400,
    imageUrl: "oklahoma-city-oklahoma-temple.jpg"
  },
  {
    templeName: "Orlando Florida",
    location: "Orlando, Florida, United States",
    dedicated: "1994, October, 9",
    area: 70000,
    imageUrl: "orlando-florida-temple.jpg"
  },
  {
    templeName: "Palmyra New York",
    location: "Palmyra, New York, United States",
    dedicated: "2000, April, 6",
    area: 10000,
    imageUrl: "palmyra-new-york-temple.jpg"
  },
  {
    templeName: "Panama City Panama",
    location: "Panama City, Panama",
    dedicated: "2008, August, 10",
    area: 18000,
    imageUrl: "panama-city-panama-temple.jpg"
  },
  {
    templeName: "Perth Australia",
    location: "Perth, Australia",
    dedicated: "2001, May, 20",
    area: 10500,
    imageUrl: "perth-australia-temple.jpg"
  },
  {
    templeName: "Philadelphia Pennsylvania",
    location: "Philadelphia, Pennsylvania, United States",
    dedicated: "2016, September, 18",
    area: 53000,
    imageUrl: "philadelphia-pennsylvania-temple.jpg"
  },
  {
    templeName: "Phoenix Arizona",
    location: "Phoenix, Arizona, United States",
    dedicated: "2014, November, 16",
    area: 64000,
    imageUrl: "phoenix-arizona-temple.jpg"
  },
  {
    templeName: "Portland Oregon",
    location: "Portland, Oregon, United States",
    dedicated: "1989, August, 19",
    area: 75000,
    imageUrl: "portland-oregon-temple.jpg"
  },
  {
    templeName: "Preston England",
    location: "Preston, England",
    dedicated: "1998, June, 7",
    area: 6900,
    imageUrl: "preston-england-temple.jpg"
  },
  {
    templeName: "Quito Ecuador",
    location: "Quito, Ecuador",
    dedicated: "1999, November, 28",
    area: 15000,
    imageUrl: "quito-ecuador-temple.jpg"
  },
  {
    templeName: "Raleigh North Carolina",
    location: "Raleigh, North Carolina, United States",
    dedicated: "1999, December, 18",
    area: 10500,
    imageUrl: "raleigh-north-carolina-temple.jpg"
  },
  {
    templeName: "Recife Brazil",
    location: "Recife, Brazil",
    dedicated: "2000, December, 15",
    area: 37500,
    imageUrl: "recife-brazil-temple.jpg"
  },
  {
    templeName: "Redlands California",
    location: "Redlands, California, United States",
    dedicated: "2003, September, 14",
    area: 17500,
    imageUrl: "redlands-california-temple.jpg"
  },
  {
    templeName: "Regina Saskatchewan",
    location: "Regina, Saskatchewan, Canada",
    dedicated: "1993, November, 14",
    area: 9900,
    imageUrl: "regina-saskatchewan-temple.jpg"
  },
  {
    templeName: "Reno Nevada",
    location: "Reno, Nevada, United States",
    dedicated: "2000, April, 23",
    area: 10500,
    imageUrl: "reno-nevada-temple.jpg"
  },
  {
    templeName: "Rexburg Idaho",
    location: "Rexburg, Idaho, United States",
    dedicated: "2008, February, 3",
    area: 57000,
    imageUrl: "rexburg-idaho-temple.jpg"
  },
  {
    templeName: "Sacramento California",
    location: "Sacramento, California, United States",
    dedicated: "2006, September, 3",
    area: 19000,
    imageUrl: "sacramento-california-temple.jpg"
  },
  {
    templeName: "San Antonio Texas",
    location: "San Antonio, Texas, United States",
    dedicated: "2005, May, 22",
    area: 16000,
    imageUrl: "san-antonio-texas-temple.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl: "san-diego-california-temple.jpg"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20000,
    imageUrl: "santiago-chile-temple.jpg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 55000,
    imageUrl: "sao-paulo-brazil-temple.jpg"
  },
  {
    templeName: "Seattle Washington",
    location: "Seattle, Washington, United States",
    dedicated: "1980, November, 17",
    area: 110000,
    imageUrl: "seattle-washington-temple.jpg"
  },
  {
    templeName: "Seoul Korea",
    location: "Seoul, Korea",
    dedicated: "1985, December, 14",
    area: 18000,
    imageUrl: "seoul-korea-temple.jpg"
  },
  {
    templeName: "St. Louis Missouri",
    location: "St. Louis, Missouri, United States",
    dedicated: "1997, April, 1",
    area: 54000,
    imageUrl: "st-louis-missouri-temple.jpg"
  },
  {
    templeName: "Stockholm Sweden",
    location: "Stockholm, Sweden",
    dedicated: "1985, July, 2",
    area: 14000,
    imageUrl: "stockholm-sweden-temple.jpg"
  },
  {
    templeName: "Suva Fiji",
    location: "Suva, Fiji",
    dedicated: "2000, June, 18",
    area: 7000,
    imageUrl: "suva-fiji-temple.jpg"
  },
  {
    templeName: "Sydney Australia",
    location: "Sydney, Australia",
    dedicated: "1984, September, 20",
    area: 30000,
    imageUrl: "sydney-australia-temple.jpg"
  },
  {
    templeName: "Tampa Florida",
    location: "Tampa, Florida, United States",
    dedicated: "2010, October, 9",
    area: 28000,
    imageUrl: "tampa-florida-temple.jpg"
  },
  {
    templeName: "Tijuana México",
    location: "Tijuana, México",
    dedicated: "2015, December, 13",
    area: 22000,
    imageUrl: "tijuana-mexico-temple.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52000,
    imageUrl: "tokyo-japan-temple.jpg"
  },
  {
    templeName: "Toronto Ontario",
    location: "Toronto, Ontario, Canada",
    dedicated: "1990, August, 25",
    area: 57000,
    imageUrl: "toronto-ontario-temple.jpg"
  },
  {
    templeName: "Tuxtla Gutiérrez México",
    location: "Tuxtla Gutiérrez, México",
    dedicated: "2000, March, 19",
    area: 10000,
    imageUrl: "tuxtla-gutierrez-mexico-temple.jpg"
  },
  {
    templeName: "Veracruz México",
    location: "Veracruz, México",
    dedicated: "2000, July, 9",
    area: 10000,
    imageUrl: "veracruz-mexico-temple.jpg"
  },
  {
    templeName: "Vancouver British Columbia",
    location: "Vancouver, British Columbia, Canada",
    dedicated: "2010, May, 2",
    area: 28000,
    imageUrl: "vancouver-british-columbia-temple.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 160000,
    imageUrl: "washington-dc-temple.jpg"
  }
];

// Function to display temple information
function displayTempleInfo(temple) {
  const templeInfo = `
    <h2>${temple.templeName}</h2>
    <p>Location: ${temple.location}</p>
    <p>Dedicated: ${temple.dedicated}</p>
    <p>Area: ${temple.area} square feet</p>
    <img src="${temple.imageUrl}" alt="${temple.templeName}">
  `;
  document.getElementById("temple-info").innerHTML = templeInfo;
}

// Event listener to display temple information when a temple is selected
document.getElementById("temple-select").addEventListener("change", function() {
  const selectedTemple = temples[this.value];
  displayTempleInfo(selectedTemple);
});

// Initialize the temple select dropdown
for (let i = 0; i < temples.length; i++) {
  const templeOption = document.createElement("option");
  templeOption.value = i;
  templeOption.text = temples[i].templeName;
  document.getElementById("temple-select").appendChild(templeOption);
}