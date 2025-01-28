// Sample product data
const products = [
    { id: 1, name: 'Product 1', price: 99.99, category: 'electronics' },
    { id: 2, name: 'Product 2', price: 149.99, category: 'electronics' },
    { id: 3, name: 'Product 3', price: 29.99, category: 'clothing' },
    { id: 4, name: 'Product 4', price: 39.99, category: 'clothing' },
    { id: 5, name: 'Product 5', price: 19.99, category: 'books' },
    { id: 6, name: 'Product 6', price: 24.99, category: 'books' },
];

// Function to render product cards
function renderProducts(productsToRender) {
    const productGrid = document.getElementById('product-grid');
    productGrid.innerHTML = '';
    productsToRender.forEach(product => {
        const productCard = document.createElement('div');
        productCard.className = 'product-card';
        productCard.innerHTML = `
            <h3>${product.name}</h3>
            <p>$${product.price.toFixed(2)}</p>
            <p>Category: ${product.category}</p>
            <button onclick="addToCart(${product.id})">Add to Cart</button>
        `;
        productGrid.appendChild(productCard);
    });
}

// Initial render
renderProducts(products);

// Filter form submission
document.getElementById('filter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const category = document.getElementById('category').value;
    const maxPrice = document.getElementById('price-range').value;
    
    const filteredProducts = products.filter(product => 
        (category === '' || product.category === category) &&
        product.price <= maxPrice
    );
    
    renderProducts(filteredProducts);
});

// Update price display
document.getElementById('price-range').addEventListener('input', function(e) {
    document.getElementById('price-display').textContent = `$${e.target.value}`;
});

// Placeholder function for adding to cart
function addToCart(productId) {
    alert(`Product ${productId} added to cart!`);
}

// Carousel functionality
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');

function showSlide(index) {
    slides.forEach((slide, i) => {
        if (i === index) {
            slide.classList.add('active');
        } else {
            slide.classList.remove('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

// Initialize carousel
showSlide(currentSlide);
setInterval(nextSlide, 5000); // Change slide every 5 seconds
