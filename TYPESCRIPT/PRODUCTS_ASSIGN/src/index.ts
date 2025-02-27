import { Book, fetchBooks } from "./products";
import { addToCart } from "./cart";

document.addEventListener("DOMContentLoaded", async () => {
    const books: Book[] = await fetchBooks();
    displayBooks(books);
});

function displayBooks(books: Book[]) {
    const bookList = document.getElementById("book-list");
    const genreFilter = document.getElementById("genre-filter") as HTMLSelectElement;
    
    if (!bookList) return;

    bookList.innerHTML = "";

    books.forEach((book) => {
        const bookElement = document.createElement("div");
        bookElement.innerHTML = `
            <h3>${book.title}</h3>
            <p><strong>Author:</strong> ${book.author}</p>
            <p><strong>Genre:</strong> ${book.genre}</p>
            <p><strong>Price:</strong> $${book.price.toFixed(2)}</p>
            <button onclick="addToCart(${book.id}, '${book.title}', ${book.price})">Add to Cart</button>
        `;
        bookList.appendChild(bookElement);
    });

    genreFilter.addEventListener("change", () => {
        const selectedGenre = genreFilter.value;
        const filteredBooks = selectedGenre === "all" ? books : books.filter(book => book.genre === selectedGenre);
        displayBooks(filteredBooks);
    });

    const genres = Array.from(new Set(books.map(book => book.genre)));
    genres.forEach(genre => {
        const option = document.createElement("option");
        option.value = genre;
        option.textContent = genre;
        genreFilter.appendChild(option);
    });
}
