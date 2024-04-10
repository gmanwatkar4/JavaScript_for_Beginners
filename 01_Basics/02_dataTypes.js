// Data Types in JavaScript

"use strict"; // treat all JavaScript code as a newer version

/* Data Types 
*Primitive Data Types*
- number
- bigint
- string -> ""
- boolean -> true/false
- null -> standalone value (representation of empty values)
- undefined -> value is not defined
- symbol -> unique

*Non-Primitive*
- object
- functions
- arrays
*/

// Examples of Data Types

let number1 = 10
let number2 = 17456272927334475347484n
let name = "Gaurav"
let isLoggedIn = true
let value = null
let accountState

console.table([number1, number2, name, isLoggedIn, value, accountState])

// return typeof each data type

console.log(typeof number1); // return type is number
console.log(typeof number2); // return type is bigint
console.log(typeof name); // return type is string
console.log(typeof isLoggedIn); // return type is boolean
console.log(typeof value); // return type of variable 'value' null variable is object
console.log(typeof accountState); // return type of 'accountState' is undefined