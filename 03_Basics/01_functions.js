function sayMyName(){
    console.log("G");
    console.log("A");
    console.log("U");
    console.log("R");
    console.log("A");
    console.log("V");   
}

sayMyName()

function addTwoNumbers(number1, number2){           // number1, number2 are called parameters 
    console.log("Addition:", number1 + number2);
}

addTwoNumbers(5, 5) // 5, 5 are called arguments

function addTwoNumbers1(number1, number2){ 
   const result = number1 + number2
   return result
}

const result = addTwoNumbers1(6, 6)
console.log("Result: ", result);

function loginUserMessage(username){
    return `${username}, just logged in....`
}
console.log(loginUserMessage("gaurav"));
console.log(loginUserMessage()); // when value is not passed to function it returns undefined