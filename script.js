// Sample product data
const products = [
    { id: 1, name: 'Samsung Galaxy S23', price: 79900, image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=250&h=200&fit=crop' },
    { id: 2, name: 'iPhone 14', price: 99900, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=250&h=200&fit=crop' },
    { id: 3, name: 'Google Pixel 7', price: 59900, image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=250&h=200&fit=crop' },
    { id: 4, name: 'OnePlus 11', price: 69900, image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=250&h=200&fit=crop' },
    { id: 5, name: 'Xiaomi 13', price: 64900, image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=250&h=200&fit=crop' },
    { id: 6, name: 'Sony Xperia 5 IV', price: 99900, image: 'https://images.unsplash.com/photo-1592750475338-74b7b21085ab?w=250&h=200&fit=crop' },
];

let cart = [];

// Function to render products
function renderProducts(productList) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';

    productList.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <img src="${product.image}" alt="${product.name}">
            <div class="product-info">
                <h3>${product.name}</h3>
                <p>$${product.price}</p>
                <button class="add-to-cart" data-id="${product.id}">Add to Cart</button>
            </div>
        `;
        productGrid.appendChild(productCard);
    });
}

// Function to update cart count
function updateCartCount() {
    const cartCount = document.getElementById('cart-count');
    cartCount.textContent = cart.length;
}

// Function to handle search
function handleSearch() {
    const searchTerm = document.getElementById('search').value.toLowerCase();
    const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm)
    );
    renderProducts(filteredProducts);
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    renderProducts(products);
    updateCartCount();

    document.getElementById('search-btn').addEventListener('click', handleSearch);
    document.getElementById('search').addEventListener('keyup', (e) => {
        if (e.key === 'Enter') {
            handleSearch();
        }
    });

    document.addEventListener('click', (e) => {
        if (e.target.classList.contains('add-to-cart')) {
            const productId = parseInt(e.target.getAttribute('data-id'));
            const product = products.find(p => p.id === productId);
            cart.push(product);
            updateCartCount();
            alert(`${product.name} added to cart!`);
        }
    });
});
