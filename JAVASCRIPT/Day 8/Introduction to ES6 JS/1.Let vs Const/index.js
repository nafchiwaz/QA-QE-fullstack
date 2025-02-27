//let and const are ES6 features that offer block scoping 

// block scoping is a way to control the variable coped better



// let
// Block-Scoped: Variables declared with let are limited to the block (enclosed by {}) 
// in which they are defined. This prevents variables from leaking out of their intended scope.
// var is accessible outside the scope

function example()
{

if(true)
{
  const x = 10
  var y = 889
  console.log(x);
  console.log(y);
}
console.log(y);
}
example()







const z =8838
if (z===8838)
{

  const z = 30
  console.log(z);

}
console.log(z);




//Hoisting :  the process whereby the interpreter appears
//  to move the declaration of functions, variables, classes, or imports to 
// the top of their scope, prior to execution of the code


//the var on a function scope, will always affect the global scope variable
// var length = 12
// function area() {
//   return length * length; // Uses global length
// }

// console.log(area()); // 144



let length = 12
function area() {

 let length= 23
  return length * length; // Uses global length
}

console.log(area()); // 144