// Initialize cart array
let cart = [];


async function fetchBooks() {
    try {
        const response = await fetch("http://localhost:5000/books");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        const books = await response.json();
        displayBooks(books);
    } catch (error) {
        console.error("Error fetching books:", error);
    }
}


function displayBooks(books) {
    const bookList = document.getElementById("book-list");
    bookList.innerHTML = "";

    books.forEach(book => {
        const bookCard = document.createElement("div");
        bookCard.classList.add("book-card");

        
        const bookData = encodeURIComponent(JSON.stringify(book));

        bookCard.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="book-image">
            <div class="book-details">
                <h3 class="book-title">${book.title}</h3>
                <p class="book-info"><strong>Author:</strong> ${book.author}</p>
                <p class="book-info"><strong>Genre:</strong> ${book.genre}</p>
                <p class="book-info"><strong>Year:</strong> ${book.year}</p>
                <p class="book-info"><strong>Pages:</strong> ${book.pages}</p>
                <p class="book-price">$${book.price.toFixed(2)}</p>
                <button class="buy-button" onclick='handleAddToCart("${bookData}")'>Buy Now</button>
            </div>
        `;

        bookList.appendChild(bookCard);
    });
}

// Handle adding book to cart (needed to safely parse the book data)
function handleAddToCart(bookData) {
    const book = JSON.parse(decodeURIComponent(bookData));
    addToCart(book);
}

// Add book to cart
function addToCart(book) {
    cart.push(book);
    updateCartCount();
    updateCartDisplay();
    // Removed toggleCart() from here so cart only opens when clicking the icon
}

// Update cart count
function updateCartCount() {
    const cartCount = document.querySelector('.cart-count');
    cartCount.textContent = cart.length;
}

// Update cart display
function updateCartDisplay() {
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');
    cartItems.innerHTML = '';

    let total = 0;

    cart.forEach((book, index) => {
        total += book.price;
        
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <img src="${book.image}" alt="${book.title}" class="cart-item-image">
            <div class="cart-item-details">
                <h4 class="cart-item-title">${book.title}</h4>
                <p class="cart-item-price">$${book.price.toFixed(2)}</p>
            </div>
            <span class="remove-item" onclick="removeFromCart(${index})">×</span>
        `;
        
        cartItems.appendChild(itemElement);
    });

    cartTotal.textContent = total.toFixed(2);
}

// Remove item from cart
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartCount();
    updateCartDisplay();
}

// Toggle cart modal
function toggleCart() {
    const modal = document.getElementById('cartModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Filter books by genre
async function filterBooks(selectedGenre) {
    try {
        const response = await fetch("http://localhost:5000/books");
        if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
        
        let books = await response.json();

        if (selectedGenre !== "all") {
            books = books.filter(book => book.genre === selectedGenre);
        }

        displayBooks(books);
    } catch (error) {
        console.error("Error filtering books:", error);
    }
}

// Initialize the application
document.addEventListener("DOMContentLoaded", () => {
    fetchBooks();

    // Add event listener for genre filter
    document.getElementById("genreFilter").addEventListener("change", (event) => {
        filterBooks(event.target.value);
    });

    // Close modal when clicking outside
    window.addEventListener('click', (event) => {
        const modal = document.getElementById('cartModal');
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});