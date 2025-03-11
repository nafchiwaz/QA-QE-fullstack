class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  greet(): void {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
}

// Creating an instance of the Person class with arguments
const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

const person2 = new Person("Bob", 25);
person2.greet(); // Output: Hello, my name is Bob and I am 25 years old.



//9. Getters and setters


class Album implements Album {
  title: string;
  artist: string;
  releaseYear: number;
  trackList: string[];

  constructor(opts: {
    title: string;
    artist: string;
    releaseYear: number;
    trackList: string[];
  }) {
    this.title = opts.title;
    this.artist = opts.artist;
    this.releaseYear = opts.releaseYear;
    this.trackList = opts.trackList;
  }

  // ...
}