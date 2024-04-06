/* Primitive Data Types
String, Number, Boolean, null, undefined, NaN, Symbol, BigInt
*/

const score = 100
const PIE = 3.14
const isLoggedIn = true
const outsideTemp = null
let userEmail;
const bigNumber = 1234567890986433335456n

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // prints false

/* Referenced Types (Non primitive)
Array, Objects, Functions
*/

const heros = ["Shaktiman", "Naagraj", "Doga"]

let myObj = {
    name: "Gaurav",
    age: 27
}

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