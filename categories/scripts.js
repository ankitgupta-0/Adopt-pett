// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const productsGrid = document.getElementById('productsGrid');

    // Fetch products from the backend API
    fetch('/api/products/category/catfood')
        .then(response => response.json())
        .then(products => {
            products.forEach(product => {
                const productElement = document.createElement('div');
                productElement.classList.add('product-item');

                productElement.innerHTML = `
                    <img src="${product.imageUrl}" alt="${product.name}">
                    <h3>${product.name}</h3>
                    <p>${product.description}</p>
                    <p>$${product.price}</p>
                    <button onclick="addToCart('${product._id}')">Add to Cart</button>
                `;

                productsGrid.appendChild(productElement);
            });
        })
        .catch(error => console.error('Error fetching products:', error));
});

function addToCart(productId) {
    fetch('/api/cart/add', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ productId, quantity: 1 }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Product added to cart:', data);
        // Update cart count or notify user
    })
    .catch(error => console.error('Error adding to cart:', error));
}
