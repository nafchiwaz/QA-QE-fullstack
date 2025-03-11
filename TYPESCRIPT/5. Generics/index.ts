function getFirstElement<T>(arr: T[]): T | undefined {
  return arr[0];
}

const numbers = [1, 2, 3];
const strings = ['apple', 'mango', 'orange'];

const firstNumber = getFirstElement(numbers); // firstNumber is of type number | undefined
const firstString = getFirstElement(strings); // firstString is of type string | undefined

console.log(firstNumber);
console.log(firstString);



// 1.  generic parameters



// Example 1: Generic function to reverse an array
function reverseArray<T>(arr: T[]): T[] {
  return arr.reverse();
}

const numbers = [1, 2, 3, 4, 5]; // First declaration of numbers
const reversedNumbers = reverseArray(numbers);
console.log(reversedNumbers);

const strings = ["apple", "banana", "cherry"]; // First declaration of strings
const reversedStrings = reverseArray(strings);
console.log(reversedStrings);

// Example 2: Generic interface for a box containing a value
interface Box<T> {
  value: T;
}

const numberBox: Box<number> = { value: 42 };
const stringBox: Box<string> = { value: "Hello" };

console.log(numberBox.value);
console.log(stringBox.value);

// Example 3: Generic class for a pair of values
class Pair<T, U> {
  first: T;
  second: U;

  constructor(first: T, second: U) {
    this.first = first;
    this.second = second;
  }
}

const pair1 = new Pair<number, string>(1, "one");
const pair2 = new Pair<string, boolean>("isTrue", true);

console.log(pair1.first, pair1.second);
console.log(pair2.first, pair2.second);