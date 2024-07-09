// JavaScript to dynamically add product options
const products = [
    {
        id: 'fc-1888',
        name: 'flux capacitor',
        avg_rating: 4.5
    },
    {
        id: 'fc-2050',
        name: 'power laces',
        avg_rating: 4.7
    },
    {
        id: 'fs-1987',
        name: 'time circuits',
        avg_rating: 3.5
    },
    {
        id: 'ac-2000',
        name: 'low voltage reactor',
        avg_rating: 3.9
    },
    {
        id: 'jj-1969',
        name: 'warp equalizer',
        avg_rating: 5.0
    }
];

const features = [
    { name: 'Durability' },
    { name: 'Ease of Use' },
    { name: 'Performance' },
    { name: 'Design' }
];

const productSelect = document.getElementById('product');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Dynamically add features as checkboxes
const featuresContainer = document.getElementById('features-container');

features.forEach(feature => {
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = feature.name;
    checkbox.name = 'features';
    checkbox.value = feature.name;

    const label = document.createElement('label');
    label.htmlFor = feature.name;
    label.textContent = feature.name;

    featuresContainer.appendChild(checkbox);
    featuresContainer.appendChild(label);
    featuresContainer.appendChild(document.createElement('br')); // For line breaks
});
