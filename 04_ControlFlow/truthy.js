// truthy and falsy values

const userEmail = "gm@gmail.com"

if (userEmail) {
    console.log("got user email");  // got user email
} else{
    console.log("dont have user email");
}

// we assumes that the given string is a true value thats the truthy value.

// falsy values -> false, 0, -0, bigInt 0n, "", null, undefined, NaN

// truthy values -> "0", 'false', " ", [], {}, function(){}

// empty arrays checks

const emptyArray = []

if (emptyArray.length === 0) {
    console.log("array is empty");  // array is empty
}

// empty object checks

const myObject = {}

if (Object.keys(myObject).length === 0) {
    console.log("object is empty");     // object is empty
}

// false == 0 -> true, false == '' -> true, 0 == '' -> true

// Nullish Colescing Operator (??): null undefined

let val1 = 5 ?? 10
val1 = null ?? 10
val1 = undefined ?? 15
val1 = null ?? 10 ?? 25

console.log(val1);  // 10

// Terniary operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice <= 80 ? console.log("less that 80") : console.log("more than 80");  // more than 80