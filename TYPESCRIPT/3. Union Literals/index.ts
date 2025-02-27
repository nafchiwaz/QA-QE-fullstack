///EXERCISE 1


function getUsername(username: string | null): string {
  if (username !== null) {
    return `User: ${username}`;
  } else {
    return 'Guest';
  }
}

// ✅ Test cases
const result = getUsername('Alice'); // "User: Alice"
console.log(result);

const result2 = getUsername(null); // "Guest"
console.log(result2);




//Exercise 2 


function move(direction: "up" | "down" | "left" | "right", distance: number) 

{
  console.log(`Moving ${direction} by ${distance} units`);
}


move("up", 10); 


