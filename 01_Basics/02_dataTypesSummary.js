/* Primitive Data Types
String, Number, Boolean, null, undefined, NaN, Symbol, BigInt
*/

// Examples of primitive data types

const score = 100           // number
const PIE = 3.14            // number
const isLoggedIn = true     // boolean
const outsideTemp = null    // null
let userEmail;              // undefined
const bigNumber = 1234567890986433335456n      // bigInt

const id = Symbol('123')            // symbol
const anotherId = Symbol('123')

console.log(id == anotherId); // prints false

/* Referenced Types (Non primitive)
Array, Objects, Functions
*/

// array
const heros = ["Shaktiman", "Naagraj", "Doga"]

// object

let myObj = {
    name: "Gaurav",
    age: 27
}

// function 

const myFunction = function(){
    console.log("Hello Gaurav!");
}

console.log(typeof heros); // returns object
console.log(typeof myObj); // returns object
console.log(typeof myFunction); // returns function (function object)

// ********************************** Memory Types ********************************************

/*  Stack - This memory used in all primitive type data types
    Heap - This memory used in all non primitive data types

    In stack we are getting copy of a variable
    In heap the changes made in original values
 */

// stack example

let ytChannel = "ChaiAurCode"
let anotherytChannel = ytChannel
anotherytChannel = "TechnicalGuruji"

console.log(ytChannel); // prints ChaiAurCode
console.log(anotherytChannel); // TechnicalGuruji

// heap example

let userOne = {
    email: "gm@yahoo.com",
    upi: "user@axl"
}

let userTwo = userOne

userTwo.email = "gm@google.com"

console.log(userOne.email); // prints gm@google.com
console.log(userTwo.email); // prints gm@google.com