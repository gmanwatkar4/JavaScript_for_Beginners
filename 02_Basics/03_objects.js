// objects
// Singleton - made from constructor (Object.create)

// object literals

const mySymbol = Symbol("key1")

const jsUser ={
    name: "Gaurav",
    "full name": "Gaurav Manwatkar",
    [mySymbol]: "mykey1",
    age: 20,
    location: "Nagpur",
    email: "gm@gmail.com",
    isLoggedIn: false,
    lastLoginDay: ["Monday", "Saturday"]
}

console.log("Email:", jsUser.email);    // Email: gm@gmail.com
console.log("Email:", jsUser["email"]); // Email: gm@gmail.com
console.log("full name:", jsUser["full name"]); // full name: Gaurav Manwatkar
console.log("mySymbol:", jsUser[mySymbol]); // mySymbol: mykey1

jsUser.email = "gm@yahoo.com"
console.log("updated email:", jsUser.email);    // updated email: gm@yahoo.com

jsUser.greeting = function(){
    console.log("Hello js users....");  
}
console.log(jsUser.greeting());     // Hello js users....

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greetingTwo());      // Hello js user, Gaurav