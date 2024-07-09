// JavaScript to dynamically add product options
const products = [
    { name: 'Product 1' },
    { name: 'Product 2' },
    { name: 'Product 3' },
    { name: 'Product 4' }
];

const productSelect = document.getElementById('product');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.name;
    option.textContent = product.name;
    productSelect.appendChild(option);
});
