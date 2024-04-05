/* Primitive Data Types
String, Number, Boolean, null, undefined, NaN, Symbol, BigInt
*/

const score = 100
const PIE = 3.14
const isLoggedIn = true
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId); // prints false

const bigNumber = 1234567890986433335456n

/* Referenced (Non primitive)
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