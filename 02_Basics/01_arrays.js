// Arrays
/*
*Javascript arrays are resizable, mixed of data types, you can add multiple element values
*zero based indexing
*A shallow copy of an object is a copy whose properties share the same reference point (heap)
*A deep copy of an object is a copy whose properties do not share the same reference point (stack)
*/

// number array

const myArr = [1, 2, 3, 4, 5]       // 1,2,3,4,5 are called array elements
console.log("0th index: ", myArr[0])    // 0th index:  1

// string array

const myheros = ["Shaktiman", "Naagraj"]

const myArr1 = new Array(5, 4, 3, 2, 1)
console.log("0th index: ", myArr1[0])   // 0th index:  5

// Array Methods

// push() method

myArr.push(6) // add 6 at the end of array
myArr.push(7) // adds 7 at the end of array
myArr.pop() // removes last element of an array
console.log("myArr : ", myArr);     // myArr:  [ 1, 2, 3, 4, 5, 6 ]

// unshift() method 

myArr.unshift(0)
console.log(myArr); // adds 0 at the beginning of the array

// shift() method

myArr.shift()
console.log(myArr); // removes first index of an array

// includes() and indexOf()

console.log("Is value exist: ", myArr.includes(9));     // Is value exist:  false
console.log("Index of 5: ", myArr.indexOf(5));      // Index of 5:  4

// join() method

const newArr = myArr.join()
console.log("myArr: ", myArr);  // myArr:  [ 1, 2, 3, 4, 5, 6 ]
console.log("newArr: ", newArr);    // newArr:  1,2,3,4,5,6
console.log("type of myArr: ", typeof myArr);   // type of myArr:  object
console.log("type of newArr: ", typeof newArr); // type of newArr:  string

// slice(), splice() methods

console.log("A: ", myArr);  // A:  [ 1, 2, 3, 4, 5, 6 ]

const myn1 = myArr.slice(1, 3)

// only prints 1st and 2nd index elements, ignores from end inputed element

console.log("slice result: ", myn1); // slice result:  [ 2, 3 ]

console.log("B: ", myArr);  // B:  [ 1, 2, 3, 4, 5, 6 ]

const myn2 = myArr.splice(1, 3)

// moves the values from original array, moves 1st, 2nd and 3rd elements

console.log("splice result: ", myn2);   // splice result:  [ 2, 3, 4 ]

// splice manipulates the array

console.log("C: ", myArr);  // C:  [ 1, 5, 6 ]