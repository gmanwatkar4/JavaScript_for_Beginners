// Numbers

const score = 350
console.log("Score : ", score);     // prints Score :  350

const balance = new Number(100)
console.log("Balance : ", balance); // prints Balance :  [Number: 100]

console.log("toString : ", balance.toString());     // toString :  100
console.log("typeof balance : ", typeof balance);   // typeof balance :  object
console.log("length of balance : ", balance.toString().length); // length of balance :  3
console.log("toFixed : ", balance.toFixed(2));  // toFixed :  100.00

const otherNumber = 23.1997
console.log("toPricision 3 : ", otherNumber.toPrecision(3));    // toPricision 3 :  23.2
console.log("toPricision 4 : ", otherNumber.toPrecision(4));    // toPricision 4 :  23.20

const hundreds = 1000000
console.log("toLocaleString : ", hundreds.toLocaleString('en-IN')); // toLocaleString :  10,00,000

// *************************************** Maths **********************************************

console.log("returns : ", Math);    // returns :  Object [Math] {}
console.log("abs value : ", Math.abs(-4));  // abs value :  4
console.log("round value : ", Math.round(4.6)); // round value :  5
console.log("ceil value: ", Math.ceil(4.2));    // ceil value:  5
console.log("floor value : ", Math.floor(4.7)); // floor value :  4
console.log("min value: ", Math.min(4, 5, 3, 7));   // min value:  3
console.log("max value : ", Math.max(4, 8, 12, 6)); // max value :  12

// in randon() functions values will be lies in between 0 and 1

console.log("random -> toPricision : ", Math.random().toPrecision(4)); // random -> toPricision :  0.8005
console.log("random * 10 + 1 : ", (Math.random()*10) + 1);      // random * 10 + 1 :  3.275674992444301

const min = 10
const max = 20

console.log("value : ", Math.floor(Math.random() * (max - min + 1)) + min); // value :  14 