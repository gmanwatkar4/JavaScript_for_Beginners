// if

/* 
Comparision operators :
<, >, <=, >=, ==, !=, === (also checks type), !== (-ve sign check)
*/

const isUserLoggedIn = true
const temperature = 50

if(temperature === 55){
    console.log("less than 50");
} else{
    console.log("temperature is greater than 55");
}

const score = 200
const power = "fight"

if(score > 100){
    const power = "fly"
    console.log(`user power: ${power}`);
}

console.log(`user power: ${power}`);

// short hand notation

const balance = 1000
if (balance > 500) console.log("true");

// nesting

if (balance < 500) {
    console.log("less than 500");
} else if (balance < 750) {
    console.log("less than 700");
} else if (balance < 900) {
    console.log("less than 900");
}else{
    console.log("less than 1200");
}

// 

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard) {
    console.log("allow to buy courses");
}

if (loggedInFromGoogle || loggedInFromEmail) {
    console.log("user logged in");
}


