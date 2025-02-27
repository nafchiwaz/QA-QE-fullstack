export function addToCart(id, title, price) {
    console.log(`Adding ${title} to cart.`);
}
let cart = [];
function updateCart() {
    const cartContainer = document.getElementById("cart");
    const totalPriceElement = document.getElementById("total-price");
    if (!cartContainer || !totalPriceElement)
        return;
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
window.addToCart = function (id, title, price) {
    const existingItem = cart.find(item => item.id === id);
    if (existingItem) {
        existingItem.quantity++;
    }
    else {
        cart.push({ id, title, price, quantity: 1 });
    }
    updateCart();
};
window.removeFromCart = function (index) {
    cart.splice(index, 1);
    updateCart();
};
//# sourceMappingURL=cart.js.map