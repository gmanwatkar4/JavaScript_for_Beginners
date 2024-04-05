// Variables in JavaScript

const accountID = 144553 // value cannot change
let accountEmail = "gaurav@gmail.com"
var accountPassword = "12345"
accountCity = "Nagpur"

/* 
accountID = 2
console.log(accountID); //cannot print accountID because its declared as constant
*/

accountEmail = "gm@yahoo.com"
accountPassword = "21011996"
accountCity = "Thane"

// console.table function prints all the index and values in varibale
console.table([accountID, accountEmail, accountPassword, accountCity]) // prints all the values in index : value format

// In JavaScript we can use 2 kaywords for the variable - var and let
// We cannot use var keyword due to block scope and functional scope issue

let accountState;
console.log(accountState); // prints undefined

// The value of accountState is undefined if not assigned any value to the variable