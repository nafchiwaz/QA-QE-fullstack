
                                   //ASSIGNMENT
import chalk from 'chalk'


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


// QUIZ 5 - Abbreviate Name
function abbrev_name(name) {
    let parts = name.split(' ');
    return parts.length > 1 ? `${parts[0]} ${parts[1][0]}.` : name;
}
console.log(abbrev_name("Robin Singh")); // "Robin S."

// QUIZ 6 - Hide Email Address
function protect_email(email) {
    let [user, domain] = email.split('@');
    return `${user.slice(0, 5)}...@${domain}`;
}
console.log(protect_email("robin_singh@example.com")); // "robin...@example.com"



// quiz 7
function string_parameterize(str) {
    return str.toLowerCase().replace(/\s+/g, '-').replace(/[^\w-]/g, '');
}
console.log(string_parameterize("Robin Singh from USA.")); // "robin-singh-from-usa"


// QUIZ 8

function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
console.log(capitalize('js string exercises')); // "Js string exercises"



//QUIZ 9
function capitalize_Words(str) {
    return str.split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
}
console.log(capitalize_Words('js string exercises')); // "Js String Exercises"



//QUIZ 10
function swapcase(str) {
    return str.split('').map(c => c === c.toUpperCase() ? c.toLowerCase() : c.toUpperCase()).join('');
}
console.log(swapcase('AaBbc')); // "aAbBC"



// QUIZ 11
function camelize(str) {
    return str.split(' ').map((word, i) => i === 0 ? word : word.charAt(0).toUpperCase() + word.slice(1)).join('');
}
console.log(camelize("JavaScript Exercises")); // "JavaScriptExercises"



//QUIZ 12
function uncamelize(str, separator = ' ') {
    return str.replace(/([a-z])([A-Z])/g, `$1${separator}$2`).toLowerCase();
}
console.log(uncamelize('helloWorld')); // "hello world"
console.log(uncamelize('helloWorld','-')); // "hello-world"



// QUIZ 13
function repeat(str, n) {
    return str.repeat(n);
}
console.log(repeat('Ha!', 3)); // "Ha!Ha!Ha!"



// QUIZ 14
function insert(str, insertStr, pos = 0) {
    return str.slice(0, pos) + insertStr + str.slice(pos);
}
console.log(insert('We are doing some exercises.', 'JavaScript ', 18)); // "We are doing some JavaScript exercises."



// QUIZ 15
function humanize_format(num) {
    let suffixes = ["th", "st", "nd", "rd"];
    let v = num % 100;
    return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
}
console.log(humanize_format(301)); // "301st"



//QUIZ 16
function text_truncate(str, length, ending = "...") {
    return str.length > length ? str.slice(0, length) + ending : str;
}
console.log(text_truncate('We are doing JS string exercises.', 15, '!!')); // "We are doing !!"




// QUIZ 17
function string_chop(str, size) {
    let result = [];
    for (let i = 0; i < str.length; i += size) {
        result.push(str.slice(i, i + size));
    }
    return result;
}
console.log(string_chop('w3resource', 3)); // ["w3r", "eso", "urc", "e"]




//QUIZ 18
function count(str, subStr) {
    return str.toLowerCase().split(subStr.toLowerCase()).length - 1;
}
console.log(count("The quick brown fox jumps over the lazy dog", 'the')); // 2




// QUIZ 19
function reverse_binary(num) {
    return parseInt(num.toString(2).split('').reverse().join(''), 2);
}
console.log(reverse_binary(100)); // 19



//QUIZ 20
function formatted_string(format, num, align) {
    return align === 'l' ? format.slice(0, -num.toString().length) + num : num + format.slice(0, -num.toString().length);
}
console.log(formatted_string('0000', 123, 'l')); // "0123"








                            