export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    price: number;
}

export async function fetchBooks(): Promise<Book[]> {
    try {
        const response = await fetch("http://localhost:3000/books");
        if (!response.ok) throw new Error("Failed to fetch books");
        return await response.json();
    } catch (error) {
        console.error("Error fetching books:", error);
        return [];
    }
}
