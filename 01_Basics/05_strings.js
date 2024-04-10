// Strings
// String Interpolation -> `` (backticks')

let name = "Gaurav"
let repoCount = 10

console.log(`Hi ${name}, your repo count is ${repoCount}.`); // prints Hi Gaurav, your repo count is 10.

// another way of string declaration

let myName = new String("Sumit")
console.log("My name: ", myName);                   // prints [String: 'Sumit']
console.log("First character: ", myName[0]);        // prints first character S
console.log(myName.__proto__);                      // prints empty string
console.log("Length:", myName.length);              // prints Length: 5
console.log("Upper case: ", myName.toUpperCase());  // prints SUMIT
console.log("Char at index 2: ", myName.charAt([2])); // prints m
console.log("Index of m: ", myName.indexOf('m'));       // prints index 2

const gameName = "CandyCrush"
const newString = gameName.substring(0, 4)
console.log(newString); // prints Cand

const anotherString = gameName.slice(-8, 4)
console.log(anotherString); // print nd

const newStringOne = "  Gaurav  "
console.log(newStringOne);          // prints " Gaurav  "
console.log(newStringOne.trim());   // prints "Gaurav"

const url = "https://youtube.com/gaurav%20manwatkar"
console.log(url.replace('%20', '-'))        // prints https://youtube.com/gaurav-manwatkar               
console.log(url.includes('gaurav'));        // returns true

const anotherGameName = "candy-crush-saga-soda"
console.log(anotherGameName.split('-'));        // prints [ 'candy', 'crush', 'saga', 'soda' ]