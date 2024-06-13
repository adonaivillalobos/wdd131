// JavaScript to populate the current year and last modified date

// Function to update the current year
function updateCurrentYear() {
    const currentYearElement = document.getElementById('currentyear');
    if (currentYearElement) {
        const currentYear = new Date().getFullYear();
        currentYearElement.textContent = currentYear;
    } else {
        console.error("Element with ID 'currentyear' not found.");
    }
}

// Function to update the last modified date
function updateLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified');
    if (lastModifiedElement) {
        const lastModifiedDate = new Date(document.lastModified);
        const formattedDate = lastModifiedDate.toLocaleString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit'
        });
        lastModifiedElement.textContent = 'Last modified: ' + formattedDate;
    } else {
        console.error("Element with ID 'lastModified' not found.");
    }
}

// Call the functions to update the year and last modified date
document.addEventListener('DOMContentLoaded', (event) => {
    updateCurrentYear();
    updateLastModifiedDate();
});
