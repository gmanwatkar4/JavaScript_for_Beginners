// functions

// function example

function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");   
}

sayMyName()

// add two numbers using functions

// number1, number2 are called parameters 
function addTwoNumbers(number1, number2){           
    console.log("Addition:", number1 + number2);    // Addition: 10
}

addTwoNumbers(5, 5) // 5, 5 are called arguments

// another way of writing function

function addTwoNumbers1(number1, number2){ 
   const result = number1 + number2
   return result
}
const result = addTwoNumbers1(6, 6)
console.log("Result: ", result);        // Result:  12

// passing string as parameter

function loginUserMessage(username){
    return `${username}, just logged in....`
}
console.log(loginUserMessage("gaurav"));    // gaurav, just logged in....

// when value is not passed to function it returns undefined
console.log(loginUserMessage());    // undefined, just logged in....

// ... rest operator

function calculateCartPrice(...num1){       // ... rest operator
    return num1
}
console.log("cart values : ", calculateCartPrice(200, 300, 500));   // cart values :  [ 200, 300, 500 ]

// passing object to the function

const user = {
    username: "gaurav",
    price: 199
}

function handleObject(anyObject){
    console.log(`username is ${anyObject.username} and the price is ${anyObject.price}`);   // username is gaurav and the price is 199
}

handleObject(user) // passing object "user" to function "handleObject"

// another way of passing object to the function

handleObject({
    username: "Faizal",
    price: 399
})      // username is Faizal and the price is 399

// passing array to the function

const myNewArr = [100, 200, 300, 400, 500]

function returnValue(getArr){
    return getArr[2]
}
console.log("return array element: ", returnValue(myNewArr));   // return array element:  300

// another way of passing array to the function

console.log("new element: ", returnValue([100, 200, 300, 400, 500]));   // new element:  300