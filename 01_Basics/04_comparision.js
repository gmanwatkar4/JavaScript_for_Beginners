// comparisions

// console.log(2 = 1); Error
console.log(2 == 1); // prints false
console.log(2 > 1); // prints true
console.log(2 < 1); // prints false
console.log(2 >= 1); // prints true
console.log(2 <= 1); // prints false
console.log(2 != 1); // prints true

console.log("2" > 1); // prints true
console.log("02" > 1); // prints true

/*
The reason is that an equality check == and comparisions > < >= <= work differently.
Comparisions convert null to a number, treating it as 0.
Thats why (3) null >= 0 is true and (1) null > 0 is false.
*/
console.log(null > 0); // prints false
console.log(null == 0); // prints false
console.log(null >= 0); // prints true

console.log(undefined > 0); // false
console.log(undefined == 0); // false
console.log(undefined >= 0); // false

// ===
console.log("2" === 2); // false
