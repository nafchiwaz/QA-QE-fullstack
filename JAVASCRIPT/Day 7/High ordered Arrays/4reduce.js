// array.reduce(callback[, initialValue]);


// the reduce() method is a powerful 
// higher-order function in JavaScript that
//  iterates over an array and accumulates
//   a single value. It's often used to
//    perform calculations like summing 
//    values, finding the maximum/minimum, or
//     creating a new object 
//   based on the array elements.



const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log(sum); // Output: 15