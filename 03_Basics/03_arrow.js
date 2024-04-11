// arrow => function in javascript

const user = {
    username: "gaurav",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to the website!`);   
        // console.log(this);
    }
}

user.welcomeMessage()   // // gaurav, welcome to the website!
user.username = "sam"
user.welcomeMessage()   // sam, welcome to the website!

// current object is empty {} in node environment because we dont have any object in global

console.log(this);  // {}

// in browser the global object is Window object

function chai(){
    let username = "gaurav"
    console.log(this.username);
}

chai() // prints undefined -> this only used in object, we unable to use it inside the function

const chai1 = function(){
    let username = "gaurav"
    console.log(this.username);
}

chai1() // prints undefined -> this only used in object, we unable to use it inside the function

// arrow function

const chai2 = () => {
    let username = "gaurav"
    console.log(this.username);
}

chai2() // prints undefined -> this only used in object, we unable to use it inside the function

const chai3 = () => {
    let username = "gaurav"
    console.log(this);
}

chai3() // return empty {}

// more on arrow function

const addTwo = (num1, num2) => {       // if wrapped in curly braces we have to return the expression
    return num1 + num2 // explicit return
}

console.log("addTwo:", addTwo(5, 6));   // addTwo: 11

// implicit return

const addThree = (num1, num2, num3) => num1 + num2 + num3
console.log("addThree:", addThree(3, 3, 3));    // addThree: 9

const addFour = (num1, num2, num3, num4) => (num1 + num2 + num3 + num4) // dont have to return if wrapped in ()
console.log("addFour:", addFour(3, 3, 4, 4));   // addFour: 14

// return object

const addOne = (num) => ({username: "gaurav"})
console.log(addOne(5)); // { username: 'gaurav' }