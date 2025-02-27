const availableFoods = [
  { id: "qwe234dfh", name: "Burger", image: "🍔", price: 234 },
  { id: "qwe2356dxh", name: "Pizza", image: "🍕", price: 400 },
  { id: "qwe2456yh", name: "Meat", image: "🍖", price: 500 },
  { id: "qwe2785yh", name: "Chicken", image: "🍗", price: 1200 }
];

function displayFoods() {
  console.log("Available Foods:");
  availableFoods.forEach((food) => {
    console.log(`- ${food.name} (${food.image}): ${food.price}`);
  });
}

function findFoodByName(name) {
  return availableFoods.find((food) => food.name.toLowerCase() === name.toLowerCase());
}


function calculateTotalPrice(orderIds) {
  return orderIds.reduce((total, id) => {
    const food = availableFoods.find((food) => food.id === id);
    return total + (food ? food.price : 0); 
  }, 0);
}

// Display the available foods
displayFoods();

// Find a food item by name
const pizza = findFoodByName("Pizza");
console.log("Found Pizza:", pizza);

// Calculate the total price of an order
const orderIds = ["qwe234dfh", "qwe2456yh"]; // Order: Burger, Meat
const totalPrice = calculateTotalPrice(orderIds);
console.log("Total Price:", totalPrice);
