// Conversion Operations

let score = 100

console.log(typeof score); // return number
console.log(typeof(score)); // return number

// into number conversion

let myScore = "101"
let valueInMyscore = Number(myScore)
console.log(typeof valueInMyscore); // return number

let myScore1 = "100abc"
let valueInMyscore1 = Number(myScore1)
console.log(valueInMyscore1); // return NaN (not a number)

let myScore2 = null
let valueInMyscore2 = Number(myScore2)
console.log(valueInMyscore2); // returns 0

let myScore3 = undefined
let valueInMyscore3 = Number(myScore3)
console.log(valueInMyscore3); // returns NaN

let myScore4 = true
let valueInMyscore4 = Number(myScore4)
console.log(valueInMyscore4); // returns 1

let myScore5 = ""
let valueInMyscore5 = Number(myScore5)
console.log(valueInMyscore5); // returns 0

/* Values return after converting into Number
"101" -> 101
"100abc" -> NaN
null -> 0
undefined -> NaN
true -> 1, false -> 0
"" -> 0
*/

// into boolean conversion

let myBoolean = 102
let valueInMyBoolean = Boolean(myBoolean)
console.log(valueInMyBoolean); // returns true

let myBoolean1 = "Gaurav"
let valueInMyBoolean1 = Boolean(myBoolean1)
console.log(valueInMyBoolean1); // returns true

let myBoolean2 = null
let valueInMyBoolean2 = Boolean(myBoolean2)
console.log(valueInMyBoolean2); // returns false

let myBoolean3 = undefined
let valueInMyBoolean3 = Boolean(myBoolean3)
console.log(valueInMyBoolean3); // returns false

let myBoolean4 = ""
let valueInMyBoolean4 = Boolean(myBoolean4)
console.log(valueInMyBoolean4); // returns false

let myBoolean5 = 1
let valueInMyBoolean5 = Boolean(myBoolean5)
console.log(valueInMyBoolean5); // returns true

/* values returning after conversion into Boolean
101 -> true
"Gaurav" -> true
null -> false
undefined -> false
"" -> false
1 -> true, 0 -> false
*/

// into String conversion

let myString = 103
let valueInMyString = String(myString)
console.log(valueInMyString); // return 103
console.log(typeof(valueInMyString)); // return type is string

let myString1 = null
let valueInMyString1 = String(myString1)
console.log(valueInMyString1); // return null

let myString2 = undefined
let valueInMyString2 = String(myString2)
console.log(valueInMyString2); // return undefined

let myString3 = NaN
let valueInMyString3 = String(myString3)
console.log(valueInMyString3); // return NaN

let myString4 = true
let valueInMyString4 = String(myString4)
console.log(valueInMyString4); // return true

let myString5 = " "
let valueInMyString5 = String(myString5)
console.log(valueInMyString5); // return whitespace

/* values returning after conversion into string
103 -> 103, return type -> string
null -> null
undefined -> undefined
NaN -> NaN
true -> true, false -> false
"" -> whitespace
*/
// *********************** Operations ***********************************************************

console.log("1" + 2); // prints 12 (string + number = string)
console.log(1 + "2"); // prints 12 (number + string = string)
console.log("1" + 2 + 2); // prints 122 (string + number + number = string)
console.log(1 + 2 + "2"); // prints 32 (number + number + string = addition of number + string)