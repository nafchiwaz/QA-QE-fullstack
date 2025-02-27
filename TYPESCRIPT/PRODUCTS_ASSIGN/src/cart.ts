export function addToCart(id: number, title: string, price: number) {
    console.log(`Adding ${title} to cart.`);
}


interface CartItem {
    id: number;
    title: string;
    price: number;
    quantity: number;
}

let cart: CartItem[] = [];

function updateCart() {
    const cartContainer = document.getElementById("cart");
    const totalPriceElement = document.getElementById("total-price");

    if (!cartContainer || !totalPriceElement) return;

    cartContainer.innerHTML = "";

    let total = 0;
    cart.forEach((item, index) => {
        total += item.price * item.quantity;
        const itemElement = document.createElement("div");
        itemElement.innerHTML = `
            <p>${item.title} (x${item.quantity}) - $${(item.price * item.quantity).toFixed(2)}</p>
            <button onclick="removeFromCart(${index})">Remove</button>
        `;
        cartContainer.appendChild(itemElement);
    });

    totalPriceElement.textContent = total.toFixed(2);
}

(window as any).addToCart = function (id: number, title: string, price: number) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ id, title, price, quantity: 1 });
    }
    updateCart();
};

(window as any).removeFromCart = function (index: number) {
    cart.splice(index, 1);
    updateCart();
};
