// Primitive
// 7 types: String, Number, BigInt, Boolean, null, Undefined, Symbol

const score = 100 // Number
const scoreValue = 100.3 // Number

const isLoggedIn = false // Boolean
const outsideTemp = null // Null
let userEmail; // Undefined

const id = Symbol('123') // Symbol
const anotherId = Symbol('123') // Symbol

console.log(id === anotherId);

const bigNumber = 2 * 10 ** 3n // BigInt

// Non-Primitive(Reference)
// 3 types: Array, Object, Function

const heros = ["superman", "batman", "hulk"] // Array

let myObj = {
    name: "hitesh",
    age: 23,
} // Object

const myFunction = function(){
    console.log("Hello World");
    
} // Function

