// getdates.js

// Function to get the current year
function getCurrentYear() {
    return new Date().getFullYear();
}

// Function to display current year in footer
function displayCurrentYear() {
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = getCurrentYear();
    }
}

// Function to display last modified date in footer
function displayLastModified() {
    const lastModifiedParagraph = document.getElementById('lastModified');
    if (lastModifiedParagraph) {
        const lastModifiedDate = document.lastModified;
        lastModifiedParagraph.textContent = `Last modified: ${lastModifiedDate}`;
    }
}

// Call functions when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    displayCurrentYear();
    displayLastModified();
});
