let score = '33';
// console.log(typeof score);

let ValueInNumber = Number(score) ;
// console.log(typeof ValueInNumber);

let score_2 = '33a';
let ValueInNumber_2 = Number(score_2) ;
// console.log(typeof ValueInNumber_2);
// console.log(ValueInNumber_2);

let score_3 = true;
let ValueInNumber_3 = Number(score_3);
// console.log(ValueInNumber_3);


let score_4 = "Hooria";
let ValueInNumber_4 = Number(score_4);
//console.log(ValueInNumber_4);

// "33" => 33
// "33abc" => NaN
// true => 1 ; false => 0

let isLoggedIn = 1;
let booleanIsLoggedIn = Boolean(isLoggedIn);
// console.log(booleanIsLoggedIn);


let isLoggedIn_2 = 0;
let booleanIsLoggedIn_2 = Boolean(isLoggedIn_2);
// console.log(booleanIsLoggedIn_2);

let isLoggedIn_3 = "Hooria";
let booleanIsLoggedIn_3 = Boolean(isLoggedIn_3);
// console.log(booleanIsLoggedIn_3);

let isLoggedIn_4 = "";
let booleanIsLoggedIn_4 = Boolean(isLoggedIn_4);
// console.log(booleanIsLoggedIn_4);

// 1 => true; 0 => false
// "" => false
// "hooria" => true

// **************************************Operations********************************************

let value = 3
let negValue = -value

// console.log(negValue);


// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**2);
// console.log(2/3);
// console.log(2%2);

// Concatenation of strings
let str1 = "Hello"
let str2 = " Hooria"
let str3 = str1 + str2
// console.log(str3);

// console.log("1" + 2);
// console.log(typeof("1" + 2));

// console.log(1 + "2");
// console.log(typeof(1 + "2"));

// console.log("1" + 2 + 2);
// console.log(typeof("1" + 2 + 2));

// console.log(1 + 2 + "2");
// console.log(typeof(1 + 2 + "2"));

// AVOID WRITING CODE LIKE THIS
// console.log(+true);
// console.log(+"");

let num1, num2, num3

num1 = num2 = num3 = 2+2


// Incrementm ++

let gameCounter = 100
let x = ++gameCounter; // pre-increment, first increments and then return the value
// console.log(gameCounter);
// console.log(x);


let gameCounter2 = 100
let y = gameCounter2++; // post-increment, first returns the value and then increments
// console.log(gameCounter2);
// console.log(y);


// link to study
// https://tc39.es/ecma262/multipage/abstract-operations.html#sec-type-conversion


















