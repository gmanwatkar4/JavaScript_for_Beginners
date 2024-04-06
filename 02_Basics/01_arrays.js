// Arrays
/*
*Javascript arrays are resizable, mixed of data types, you can add multiple element values
*zero based indexing
*A shallow copy of an object is a copy whose properties share the same reference point (heap)
*A deep copy of an object is a copy whose properties do not share the same reference point (stack)
*/

const myArr = [1, 2, 3, 4, 5] // 1,2,3,4 are called array elements
console.log("0th index: ", myArr[0])

const myheros = ["Shaktiman", "Naagraj"]

const myArr1 = new Array(5, 4, 3, 2, 1)
console.log("0th index: ", myArr1[0])

// Array Methods

myArr.push(6) // add 6 at the end of array
myArr.push(7) // adds 7 at the end of array
myArr.pop() // removes last element of an array
console.log(myArr);

myArr.unshift(0)
console.log(myArr); // adds 0 at the beginning of the array

myArr.shift()
console.log(myArr); // removes first index of an array

console.log("Is value exist: ", myArr.includes(9)); // false
console.log("Index of 5: ", myArr.indexOf(5));

const newArr = myArr.join()
console.log("myArr: ", myArr);
console.log("newArr: ", newArr);
console.log("type of myArr: ", typeof myArr);
console.log("type of newArr: ", typeof newArr);

// slice, splice

console.log("A: ", myArr);

const myn1 = myArr.slice(1, 3)
console.log("slice result: ", myn1); // only prints 1st and 2nd index elements, ignores from end inputed element

console.log("B: ", myArr);

const myn2 = myArr.splice(1, 3)
console.log("splice result: ", myn2); // moves the values from original array, moves 1st, 2nd and 3rd elements

console.log("C: ", myArr); // splice manipulates the array