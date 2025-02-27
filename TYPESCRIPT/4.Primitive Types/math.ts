export function add(a: number, b: number): number {
  return a + b;
}

export function subtract(a: number, b: number): number {
  return a - b;
}










// let str= "Hello"
// str.toUpperCase()
// console.log(str.toUpperCase())








// function merge<T, U>(obj1:T, obj2:U): T&U{
// return{...obj1, ...obj2}

// }

// const mergedObj= merge({name:"Green"}, {age:63})

// console.log(mergedObj)

// type userType = {
//   uid: string;
//   uName: string;
//   isAdmin: boolean;
// };

// const data: userType = {
//   uid: 'dfghjk34567',
//   uName: '245coder',
//   isAdmin: false,
// };

// const fetchData = async (): Promise<userType> => { // Removed the 'id' argument
//   const user_data = await data;
//   return user_data;
// };

// fetchData().then((user) => console.log(user)); // No argument needed


// //as syntax

// const jsonString = '{"name": "Alice", "age": 30}';
// const parsedData = JSON.parse(jsonString) as { name: string; age: number };

// console.log(parsedData);



// //default parameters

// // default parameters
// const greet2 = (name: string, greetings: string = "Hello") => {
//   console.log(`${greetings} ${name}`); // Use backticks here
// };

// greet2("Bob");
// greet2("Bella", "How are you?");


