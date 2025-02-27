const sName = "Keith"


console.log('Hello', sName);


// conditional expressions 

const isDiscounted = false;
const getPrice = () => isDiscounted ? `Discounted price: $10` : `Regular price: $20`;
console.log(getPrice()); // Output: Regular price: $20