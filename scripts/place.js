document.addEventListener('DOMContentLoaded', () => {
    const currentYear = document.getElementById('currentyear');
    currentYear.textContent = new Date().getFullYear();

    const lastModified = document.getElementById('lastModified');
    lastModified.textContent = document.lastModified;
});