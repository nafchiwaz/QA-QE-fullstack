export interface Book {
    id: number;
    title: string;
    author: string;
    genre: string;
    year: number | string;
    pages: number;
    publisher: string;
    description: string;
    image: string;
    price: number;
}

export interface CartItem extends Book {
    quantity: number;
}