const name = "Hooria"
const repoCount = "50"

console.log(name + repoCount + "Value"); // Outdated way of string concatenation, instead use string interpulation.


// String Interpulation
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

// Another method to declare strings
const gameName = new String("Hitesh")

console.log(gameName[0]); // Indexing of string.

console.log(gameName.__proto__);

console.log(gameName.length); // returns the length of string.

console.log(gameName.toUpperCase()); // return uppercase version of string.

console.log(gameName.charAt(1)); // return value at index given.

console.log(gameName.indexOf('t')); // return the index of character provided.


const newString = gameName.substring(0,1); // returns a substring within the range provided, cann't have negative values in range.
console.log(newString);

const anotherString = gameName.slice(-8,4); // Slicing 
console.log(anotherString);


// To remove blank spaces and line termintaion from a string
const newStringOne = "    Hitesh"
console.log(newStringOne);
console.log(newStringOne.trim());


// For replace any character in a string 
const url = "https://hitesh.com/hitesh%20choudary"
console.log(url.replace('%20', '-'));

// To check whether a character exits in a string
console.log(url.includes('hitesh'));

// Split Method, returns an Array
const gameName01 = "Hitesh-Choudary-55"
console.log(gameName01.split('-'));
























