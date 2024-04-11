// scope in javascript

let a = 40

if(true){
    let a = 10
    const b = 20
    //var c = 30
    console.log("inner a: ", a); // local scope - inner a:  10
}

// console.log(a); // error cause declared local scope
// console.log(b); // declared in local scope
// console.log(c); // prints 30 because var can be accessed anywhere

console.log("outer a: ", a); // global scope - outer a:  40

// note : in node environment scope acts differently, also same for windows environment (in ide level)

function one(){
    const username = "gaurav"

    function two(){
        const website = "youtube"
        console.log("username:", username);     // username: gaurav
    }
    // console.log(website);

    two()
}

one()

// if scope

if(true){
    const username = "gaurav"
    if(username === "gaurav"){
        const website = " youtube"
        console.log(username + website);    // gaurav youtube
    }
    // console.log(website);
}

// console.log(username);

// +++++++++++++++++++++++ Interesting +++++++++++++++++++++++++++++++++++

function addOne(num){
    return num + 1
}

addOne(5)

// function cannot access before initialization
// addTwo(5) -> if we call the function here
const addTwo = function(num){       // addTwo is also called expression
    return num + 2
}

addTwo(5)