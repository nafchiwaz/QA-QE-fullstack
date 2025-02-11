let num3= 9 
console.log(--num3);
console.log(num3);


//Math objects 
   

console.log(typeof Math)

//math is an object in js

console.log(Math.random());

let radius = 7
console.log(Math.PI * radius**2)


console.log(Math.sqrt(81))

//

let  numbers = [1,2,3,4,5,6,7]

console.log(  'The max number is:' ,Math.max(...numbers))
//math.floor
console.log(Math.floor(4399.945))

//math.cell

console.log(Math.ceil(89.9));
console.log(Math.round(990.3));



//Math.random Returns a pseudo-random number between 0 and 1.
const invoiceNumber = Math.random() *10000000
console.log(`BSNRTY${Math.floor(invoiceNumber)}`) //BSNRTY4905775
//we want to remove the invoice number decimals
//Returns the largest integer less than or equal to the input.
console.log(Math.floor(4.5)) //4
console.log(Math.floor(4.9))
//4
//Returns the smallest integer greater than or equal to the input.
console.log(Math.ceil(4.5)) //5
console.log(Math.ceil(4.9)) //5
console.log(Math.ceil(4.1)) //5