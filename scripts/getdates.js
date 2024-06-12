// JavaScript to populate current year and last modified date

// Get the current year and update the element with ID 'currentyear'
const currentYear = new Date().getFullYear();
document.getElementById('currentyear').textContent = currentYear;

// Get the last modified date and update the element with ID 'lastModified'
const lastModifiedDate = document.lastModified;
document.getElementById('lastModified').textContent = 'Last modified: ' + lastModifiedDate;
