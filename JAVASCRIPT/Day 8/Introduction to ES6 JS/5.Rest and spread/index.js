function namess(...args) {

  // ...args   are an undifinite arguments as an Array

}



function sum(...args) {

// return args

return args.filter( (elem) => (typeof elem === 'number'))


function sum(...args) {
  return args.filter((elem) => typeof elem === 'number')
      .reduce((prev, next) => prev + next);
}
let result = sum(1, "Pamela", "hello", 90, undefined, null);
console.log(result)

}





let results = sum(1, 'pamela', 'hello', 90, undefined, null)
console.log(results);