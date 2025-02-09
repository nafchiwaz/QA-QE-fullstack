import chalk from 'chalk'


//STRING PROPERTIES

//1. LENGTH - NUMBER OD CHAR IN A STRINGS

let name = "maina"
console.log(name.length)

//charAt() - returns char at specified index

let fname ="shakira"
console.log(fname.charAt(3))




//concat - concatinates or joins to strings togethhr

let fName = "wui"
let lName = "molaaa"




console.log(fName.concat(lName))
console.log(fName.concat(" "+lName))

console.log(fName.concat('${lName}'))

//iindexOf - first occurrence of the specifid char


const lsName = 'Ann Kipkoech Keio'

console.log(lsName.indexOf("K"))

console.log(lsName.includes("K"))


//toLowerCase

console.log("Elephant".toLowerCase())
let animal = "mamba"
console.log(animal.toUpperCase())


//SPLIT - splits an object into an array

console.log(animal.split([""]))
console.log(animal.split([]))



//subString  - extracts charaters to two specified indices


let sentence = "i am a student"

console.log(sentence.substring(7,11))  //from 7 end at 11-1


//subStr - extracts parts of a strig
// beginning at the charof the specified number of char


//subStr(statring str , the number of chars)

console.log(sentence.substr(7,4)) //start from 7 count 4 


//trim()- removes white spaces from both ends of a string


let sent ="  Hi Am your driver   "

console.log(sent.trimStart())

console.log();








                                   //ASSIGNMENT
// 1. Check String Input
            function isString(input)   
            {

return typeof input === 'string' || input instanceof String;

            }               

            //TEST CASES
            console.log(isString('w3resource')); // true
            console.log(isString([1, 2, 4, 0])); // false
            console.log(isString("Hello")); //true




// 2. Check Blank String



function isBlank(input) {
    return input === null;
}
console.log(isBlank('abc')); // false
console.log(isBlank(null)); // true



// 3.String to Array of Words
function stringToArray(str) {
    return str.split(" ");
}

// Test Dat
console.log(stringToArray("Robin Singh")); // ["Robin", "Singh"]



// 4. Extract Characters


function truncate_string(str,num){

   return str.substring(0,num);

}
console.log(truncate_string("Robin Singh", 4)); // "Robi"












                      // ________________________________________________
                            //  ---------CONTINUED------------------



                            