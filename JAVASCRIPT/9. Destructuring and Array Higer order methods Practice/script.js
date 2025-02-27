const user = {
    id: "USER-123456",
    name: {
        first: "Alice",
        last: "Liddell"
    },
    email: "alice@example.com",
    address: {
        shipping: {
            street: "123 Rabbit Hole",
            city: "Wonderland",
            state: "Fantasy",
            postalCode: "12345",
            country: "WL"
        },
        billing: {
            street: "456 Mad Hatter Lane",
            city: "Tea Party",
            state: "Fantasy",
            postalCode: "67890",
            country: "WL"
        }
    },
    payment: {
        total: "100.00",
    },
    currency: "USD",
    details: {
        subtotal: "75.00",
        tax: "15.00",
        shipping: "10.00",
        transactions: [
            { id: "TXN-123", amount: "50.00", description: "Magic Potion" },
            { id: "TXN-456", amount: "50.00", description: "Enchanted Sword" }
        ]
    }
};

// Destructure the user object
const { name: { first, last }, email, address: { shipping, billing }, payment: { total }, currency, details: { transactions } } = user;

// Inject data into HTML
document.getElementById("personal-info").innerHTML = `
    <h2>${first} ${last}</h2>
    <p>${email}</p>
    <p>Total spent: ${total} ${currency}</p>
`;

document.getElementById("shipping-address").innerHTML = `
    <h2>Shipping Address</h2>
    <p>${shipping.street}</p>
    <p>${shipping.city}, ${shipping.state} ${shipping.postalCode}</p>
    <p>${shipping.country}</p>
`;

document.getElementById("billing-address").innerHTML = `
    <h2>Billing Address</h2>
    <p>${billing.street}</p>
    <p>${billing.city}, ${billing.state} ${billing.postalCode}</p>
    <p>${billing.country}</p>
`;

// Display transactions
const transactionsList = transactions.map(transaction => `
    <li>
        <h3>${transaction.description}</h3>
        <p>Amount: ${transaction.amount}</p>
    </li>
`).join('');

document.getElementById("transactions").innerHTML = `
    <h2>Transactions</h2>
    <ul>${transactionsList}</ul>
`;