var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
import { fetchBooks } from "./products";
document.addEventListener("DOMContentLoaded", () => __awaiter(void 0, void 0, void 0, function* () {
    const books = yield fetchBooks();
    displayBooks(books);
}));
function displayBooks(books) {
    const bookList = document.getElementById("book-list");
    const genreFilter = document.getElementById("genre-filter");
    if (!bookList)
        return;
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
//# sourceMappingURL=index.js.map