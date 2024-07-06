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
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/1280x800/aba-nigeria-temple-lds-1636397-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/1280x800/manti-temple-766504-wallpaper.jpg" 
    },
    {
      templeName: "Accra Ghana",
      location: "Accra, Ghana",
      dedicated: "2004, January, 11",
      area: 17500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/accra-ghana/1200x675/accra-ghana-temple-detail-249022-2400x1200.jpg"
    },
    {
      templeName: "Asunción Paraguay",
      location: "Asunción, Paraguay",
      dedicated: "2002, May, 15",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/asuncion-paraguay/1280x800/1-68dfd881f93cb86e99828aa547eac056189c55ff.jpeg"
    },
    {
      templeName: "Atlanta Georgia",
      location: "Atlanta, Georgia, United States",
      dedicated: "1983, June, 4",
      area: 37000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/atlanta-georgia/1280x800/atlanta-georgia-mormon-temple-900182-wallpaper.jpg"
    },
    {
      templeName: "Bogotá Colombia",
      location: "Bogotá, Colombia",
      dedicated: "1999, April, 26",
      area: 53500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/bogota-colombia/1280x800/bogota-colombia-temple-lds-1029726-wallpaper.jpg"
    },
    {
      templeName: "Boston Massachusetts",
      location: "Boston, Massachusetts, United States",
      dedicated: "2000, October, 1",
      area: 69500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/boston-massachusetts/1200x1200/boston-temple-lds-408087-wallpaper.jpg"
    },
    {
      templeName: "Buenos Aires Argentina",
      location: "Buenos Aires, Argentina",
      dedicated: "1986, January, 17",
      area: 30000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/buenos-aires-argentina/1280x800/buenos-airies-argentina-temple-1009069-wallpaper.jpg"
    },
    {
      templeName: "Calgary Alberta",
      location: "Calgary, Alberta, Canada",
      dedicated: "2012, October, 28",
      area: 33000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/calgary-alberta/1280x800/calgary-alberta-temple-lds-1025065-wallpaper.jpg"
    },
    {
      templeName: "Caracas Venezuela",
      location: "Caracas, Venezuela",
      dedicated: "2000, August, 20",
      area: 15500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/caracas-venezuela/1200x675/caracas_venezuela_temple_detail_1691066_2400x1200.jpg"
    },
    {
      templeName: "Chicago Illinois",
      location: "Chicago, Illinois, United States",
      dedicated: "1985, August, 9",
      area: 37500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/chicago-illinois/1280x800/Chicago-Temple_0784.jpg"
    },
    {
      templeName: "Ciudad Juárez México",
      location: "Ciudad Juárez, México",
      dedicated: "2000, March, 26",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/ciudad-juarez-mexico/1280x800/ciudad-juarez-mexico-temple-1528070-wallpaper.jpg"
    },
    {
      templeName: "Columbia South Carolina",
      location: "Columbia, South Carolina, United States",
      dedicated: "1999, October, 31",
      area: 10500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/columbia-south-carolina/1280x800/columbia-temple-768161-wallpaper.jpg"
    },
    {
      templeName: "Copenhagen Denmark",
      location: "Copenhagen, Denmark",
      dedicated: "1985, April, 15",
      area: 15000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/copenhagen-denmark/1280x800/copenhagen-denmark-temple-lds-278232-wallpaper.jpg"
    },
    {
      templeName: "Curitiba Brazil",
      location: "Curitiba, Brazil",
      dedicated: "2008, June, 1",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/curitiba-brazil/1200x1920/curitiba-brazil-temple-lds-538368-wallpaper.jpg"
    },
    {
      templeName: "Dallas Texas",
      location: "Dallas, Texas, United States",
      dedicated: "1984, December, 16",
      area: 37000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/dallas-texas/2018/1280x800/Dallas-Texas-Temple06.jpg"
    },
    {
      templeName: "Denver Colorado",
      location: "Denver, Colorado, United States",
      dedicated: "1986, October, 12",
      area: 37000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/denver-colorado/1280x800/denver-temple-lds-766966-wallpaper.jpg"
    },
    {
      templeName: "Detroit Michigan",
      location: "Detroit, Michigan, United States",
      dedicated: "1999, October, 10",
      area: 10500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/detroit-michigan/1280x800/detroit-temple-766397-wallpaper.jpg"
    },
    {
      templeName: "Draper Utah",
      location: "Draper, Utah, United States",
      dedicated: "2009, March, 21",
      area: 160000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/draper-utah/1280x800/draper-temple-lds-931732-wallpaper.jpg"
    },
    {
      templeName: "Fort Lauderdale Florida",
      location: "Fort Lauderdale, Florida, United States",
      dedicated: "2014, October, 12",
      area: 30000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/fort-lauderdale-florida/1280x800/fort-lauderdale-florida-temple-1220610-wallpaper.jpg"
    },
    {
      templeName: "Frankfurt Germany",
      location: "Frankfurt, Germany",
      dedicated: "1987, September, 10",
      area: 15000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/frankfurt-germany/1280x800/frankfurt-temple-1-2278179.jpg"
    },
    {
      templeName: "Freiberg Germany",
      location: "Freiberg, Germany",
      dedicated: "1985, June, 29",
      area: 10000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/freiberg-germany/1280x800/freiberg-germany-temple-lds-664670-wallpaper.jpg"
    },
    {
      templeName: "Guadalajara México",
      location: "Guadalajara, México",
      dedicated: "1994, November, 20",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guadalajara-mexico/1280x800/guadalajara-mexico-temple-1368114-wallpaper.jpg"
    },
    {
      templeName: "Guatemala City Guatemala",
      location: "Guatemala City, Guatemala",
      dedicated: "1984, December, 16",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/guatemala-city-guatemala/1280x800/guatemala-city-temple-lds-829605-wallpaper.jpg"
    },
    {
      templeName: "Hamilton New Zealand",
      location: "Hamilton, New Zealand",
      dedicated: "1958, April, 20",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hamilton-new-zealand/1280x800/hamilton-new-zealand-lds-temple-942155-wallpaper.jpg"
    },
    {
      templeName: "Helsinki Finland",
      location: "Helsinki, Finland",
      dedicated: "2006, October, 1",
      area: 10500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/helsinki-finland/1200x1920/helsinki-finland-temple-lds-354503-wallpaper.jpg"
    },
    {
      templeName: "Hong Kong China",
      location: "Hong Kong, China",
      dedicated: "1996, May, 26",
      area: 30000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/1200x1920/hong-kong-china-temple-lds-39528-wallpaper.jpg"
    },
    {
      templeName: "Houston Texas",
      location: "Houston, Texas, United States",
      dedicated: "2000, August, 27",
      area: 32000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/houston-texas/2018/1280x800/houston-temple02.jpg"
    },
    {
      templeName: "Indianapolis Indiana",
      location: "Indianapolis, Indiana, United States",
      dedicated: "2015, July, 17",
      area: 35000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/indianapolis-indiana/1280x800/indiana-indianapolis-temple-1496810-wallpaper.jpg"
    },
    {
      templeName: "Johannesburg South Africa",
      location: "Johannesburg, South Africa",
      dedicated: "1982, August, 24",
      area: 19000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/johannesburg-south-africa/1200x1920/johannesburg-south-africa-temple-lds-450241-wallpaper.jpg"
    },
    {
      templeName: "Jordan River Utah",
      location: "South Jordan, Utah, United States",
      dedicated: "1981, November, 16",
      area: 148000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/jordan-river-utah/1280x800/jordan-river-temple-lds-941302-wallpaper.jpg"
    },
    {
      templeName: "Kyiv Ukraine",
      location: "Kyiv, Ukraine",
      dedicated: "2010, August, 29",
      area: 22000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/kyiv-ukraine/1280x800/kyiv-ukraine-lds-temple-771090-wallpaper.jpg"
    },
    {
      templeName: "Las Vegas Nevada",
      location: "Las Vegas, Nevada, United States",
      dedicated: "1989, December, 16",
      area: 80000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/las-vegas-nevada/1280x800/las-vegas-temple-lds-758757-wallpaper.jpg"
    },
    {
      templeName: "Lima Peru",
      location: "Lima, Peru",
      dedicated: "1986, January, 10",
      area: 9000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/1200x1920/lima-peru-temple-lds-83007-wallpaper.jpg"
    },
    {
      templeName: "London England",
      location: "London, England",
      dedicated: "1958, September, 7",
      area: 21000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/london-england/1280x800/london-england-temple-lds-650241-wallpaper.jpg"
    },
    {
      templeName: "Los Angeles California",
      location: "Los Angeles, California, United States",
      dedicated: "1956, March, 11",
      area: 19000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/los-angeles-california/1280x800/los-angeles-temple-766339-wallpaper.jpg"
    },
    {
      templeName: "Madrid Spain",
      location: "Madrid, Spain",
      dedicated: "1999, March, 21",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/madrid-spain/1280x800/madrid-spain-temple-lds-854094-wallpaper.jpg"
    },
    {
      templeName: "Manaus Brazil",
      location: "Manaus, Brazil",
      dedicated: "2012, June, 10",
      area: 32000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manaus-brazil/1200x1920/manaus-brazil-temple-lds-988362-wallpaper.jpg"
    },
    {
      templeName: "México City México",
      location: "México City, México",
      dedicated: "1983, December, 2",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/1280x800/mexico-city-temple-exterior-1518357-wallpaper.jpg"
    },
    {
      templeName: "Montréal Québec",
      location: "Montréal, Québec, Canada",
      dedicated: "2000, June, 4",
      area: 10500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montreal-quebec/1280x800/montreal-quebec-temple-1169262-wallpaper.jpg"
    },
    {
      templeName: "Montevideo Uruguay",
      location: "Montevideo, Uruguay",
      dedicated: "2001, March, 18",
      area: 10500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/montevideo-uruguay/1280x800/montevideo-uruguay-temple-lds-83476-wallpaper.jpg"
    },
    {
      templeName: "Nashville Tennessee",
      location: "Nashville, Tennessee, United States",
      dedicated: "2000, May, 21",
      area: 10500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nashville-tennessee/1280x800/nashville-tennessee-mormon-temple-1121445-wallpaper.jpg"
    },
    {
      templeName: "Newport Beach California",
      location: "Newport Beach, California, United States",
      dedicated: "2005, August, 28",
      area: 17000,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/newport-beach-california/1280x800/newport-beach-temple-lds-758832-wallpaper.jpg"
    },
    {
      templeName: "Nuku'alofa Tonga",
      location: "Nuku'alofa, Tonga",
      dedicated: "1983, September, 4",
      area: 11500,
      imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/nukualofa-tonga/1280x800/nukualofa-tonga-temple-lds-435567-wallpaper.jpg"
  },
  {
    templeName: "Oklahoma City Oklahoma",
    location: "Oklahoma City, Oklahoma, United States",
    dedicated: "2002, July, 30",
    area: 10400,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/oklahoma-city-oklahoma/1280x800/1-Oklahoma-City-Temple-2231521.jpg"
  },
  {
    templeName: "Orlando Florida",
    location: "Orlando, Florida, United States",
    dedicated: "1994, October, 9",
    area: 70000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/orlando-florida/1280x800/orlando-temple-lds-776400-wallpaper.jpg"
  },
  {
    templeName: "Palmyra New York",
    location: "Palmyra, New York, United States",
    dedicated: "2000, April, 6",
    area: 10000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/palmyra-new-york/1280x800/palmyra-new-york-mormon-temple-882900-high-res-print.jpg"
  },
  {
    templeName: "Panama City Panama",
    location: "Panama City, Panama",
    dedicated: "2008, August, 10",
    area: 18000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/panama-city-panama/1280x800/panama-city-temple-lds-569186-wallpaper.jpg"
  },
  {
    templeName: "Perth Australia",
    location: "Perth, Australia",
    dedicated: "2001, May, 20",
    area: 10500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/perth-australia/1280x800/perth-australia-temple-lds-957466-wallpaper.jpg"
  },
  {
    templeName: "Philadelphia Pennsylvania",
    location: "Philadelphia, Pennsylvania, United States",
    dedicated: "2016, September, 18",
    area: 53000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/philadelphia-pennsylvania/1280x800/philadelphia-pennsylvania-temple-exterior-1775822-wallpaper.jpg"
  },
  {
    templeName: "Phoenix Arizona",
    location: "Phoenix, Arizona, United States",
    dedicated: "2014, November, 16",
    area: 64000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/pheonix-arizona/1200x1200/phoenix-temple-lds-1299466-high-res-print.jpg"
  },
  {
    templeName: "Portland Oregon",
    location: "Portland, Oregon, United States",
    dedicated: "1989, August, 19",
    area: 75000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/portland-oregon/1280x800/portland-temple-lds-1079112-wallpaper.jpg"
  },
  {
    templeName: "Preston England",
    location: "Preston, England",
    dedicated: "1998, June, 7",
    area: 6900,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/preston-england/1280x800/preston-temple-765118-wallpaper.jpg"
  },
  {
    templeName: "Quito Ecuador",
    location: "Quito, Ecuador",
    dedicated: "1999, November, 28",
    area: 15000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/quito-ecuador/1280x800/quito_ecuador_temple.jpg"
  },
  {
    templeName: "Raleigh North Carolina",
    location: "Raleigh, North Carolina, United States",
    dedicated: "1999, December, 18",
    area: 10500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/raleigh-north-carolina/1280x800/2-ab28bac8cbd5cbb98f25db40e6442a7aa1657a78.jpeg"
  },
  {
    templeName: "Recife Brazil",
    location: "Recife, Brazil",
    dedicated: "2000, December, 15",
    area: 37500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/recife-brazil/1280x800/recife-brazil-temple-lds-700211-wallpaper.jpg"
  },
  {
    templeName: "Redlands California",
    location: "Redlands, California, United States",
    dedicated: "2003, September, 14",
    area: 17500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/redlands-california/1280x800/redlands-temple-lds-165642-wallpaper.jpg"
  },
  {
    templeName: "Regina Saskatchewan",
    location: "Regina, Saskatchewan, Canada",
    dedicated: "1993, November, 14",
    area: 9900,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/regina-saskatchewan/1280x800/regina-saskatchewan-temple-lds-1027644-wallpaper.jpg"
  },
  {
    templeName: "Reno Nevada",
    location: "Reno, Nevada, United States",
    dedicated: "2000, April, 23",
    area: 10500,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/reno-nevada/1280x800/reno-nevada-lds-temple-1079431-wallpaper.jpg"
  },
  {
    templeName: "Rexburg Idaho",
    location: "Rexburg, Idaho, United States",
    dedicated: "2008, February, 3",
    area: 57000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/rexburg-idaho/1280x800/rexburg-temple-lds-453574-wallpaper.jpg"
  },
  {
    templeName: "Sacramento California",
    location: "Sacramento, California, United States",
    dedicated: "2006, September, 3",
    area: 19000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sacramento-california/1280x800/sacramento-temple-769989-wallpaper.jpg"
  },
  {
    templeName: "San Antonio Texas",
    location: "San Antonio, Texas, United States",
    dedicated: "2005, May, 22",
    area: 16000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-antonio-texas/1280x800/san-antonio-temple-lds-352484-wallpaper.jpg"
  },
  {
    templeName: "San Diego California",
    location: "San Diego, California, United States",
    dedicated: "1993, April, 25",
    area: 72000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/san-diego-california/1280x800/san-diego-temple-765109-wallpaper.jpg"
  },
  {
    templeName: "Santiago Chile",
    location: "Santiago, Chile",
    dedicated: "1983, September, 15",
    area: 20000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/santiago-chile/1200x1920/santiago-chile-temple-lds-251505-wallpaper.jpg"
  },
  {
    templeName: "São Paulo Brazil",
    location: "São Paulo, Brazil",
    dedicated: "1978, October, 30",
    area: 55000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sao-paulo-brazil/1280x800/sao-paulo-brazil-temple-lds-187030-wallpaper.jpg"
  },
  {
    templeName: "Seattle Washington",
    location: "Seattle, Washington, United States",
    dedicated: "1980, November, 17",
    area: 110000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seattle-washington/1200x1920/seattle-temple-lds-83065-wallpaper.jpg"
  },
  {
    templeName: "Seoul Korea",
    location: "Seoul, Korea",
    dedicated: "1985, December, 14",
    area: 18000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/seoul-korea/1280x800/seoul-korea-temple-lds-424784-wallpaper.jpg"
  },
  {
    templeName: "St. Louis Missouri",
    location: "St. Louis, Missouri, United States",
    dedicated: "1997, April, 1",
    area: 54000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/st-louis-missouri/1280x800/st-louis-temple-lds-903363-wallpaper.jpg"
  },
  {
    templeName: "Stockholm Sweden",
    location: "Stockholm, Sweden",
    dedicated: "1985, July, 2",
    area: 14000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/stockholm-sweden/1280x800/stockholm-sweden-lds-temple-1029788-wallpaper.jpg"
  },
  {
    templeName: "Suva Fiji",
    location: "Suva, Fiji",
    dedicated: "2000, June, 18",
    area: 7000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/suva-fiji/1280x800/suva-fiji-temple-lds-264883-wallpaper.jpg"
  },
  {
    templeName: "Sydney Australia",
    location: "Sydney, Australia",
    dedicated: "1984, September, 20",
    area: 30000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/sydney-australia/1280x800/sydney-australia-temple-sunset-1116152-wallpaper.jpg"
  },
  {
    templeName: "Tampico Mexico",
    location: "Ciudad Madero, Tamaulipas, Mexico",
    dedicated: "2000, May, 20" ,
    area: 28000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tampico-mexico/1280x800/tampico-mexico-temple-lds-129825-wallpaper.jpg"
  },
  {
    templeName: "Tijuana México",
    location: "Tijuana, México",
    dedicated: "2015, December, 13",
    area: 22000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tijuana-mexico/1280x800/tijuana-mexico-temple-exterior-1603896-wallpaper.jpg"
  },
  {
    templeName: "Tokyo Japan",
    location: "Tokyo, Japan",
    dedicated: "1980, October, 27",
    area: 52000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/tokyo-japan/1200x1920/tokyo_japan_temple-evening.jpeg"
  },
  {
    templeName: "Toronto Ontario",
    location: "Toronto, Ontario, Canada",
    dedicated: "1990, August, 25",
    area: 57000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/toronto-ontario/1280x800/toronto-temple-lds-817787-wallpaper.jpg"
  },
  {
    templeName: "Tuxtla Gutiérrez México",
    location: "Tuxtla Gutiérrez, México",
    dedicated: "2000, March, 19",
    area: 10000,
    imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/tuxtla-gutierrez-mexico-temple/tuxtla-gutierrez-mexico-temple-15226.jpg"
  },
  {
    templeName: "Veracruz México",
    location: "Veracruz, México",
    dedicated: "2000, July, 9",
    area: 10000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/veracruz-mexico/1280x800/veracruz-mexico-temple-lds-83516-wallpaper.jpg"
  },
  {
    templeName: "Vancouver British Columbia",
    location: "Vancouver, British Columbia, Canada",
    dedicated: "2010, May, 2",
    area: 28000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/vancouver-british-columbia/1280x800/vancouver-temple-766984-wallpaper.jpg"
  },
  {
    templeName: "Washington D.C.",
    location: "Kensington, Maryland, United States",
    dedicated: "1974, November, 19",
    area: 160000,
    imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/1280x800/washington_dc_temple-exterior-2.jpeg"
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