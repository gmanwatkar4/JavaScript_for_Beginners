// objects
// Singleton - made from constructor 
Object.create

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

console.log("Email:", jsUser.email);
console.log("Email:", jsUser["email"]);
console.log("full name:", jsUser["full name"]);
console.log("mySymbol:", jsUser[mySymbol]);

jsUser.email = "gm@yahoo.com"
console.log("updated email:", jsUser.email);

jsUser.greeting = function(){
    console.log("Hello js users....");
}
console.log(jsUser.greeting());

jsUser.greetingTwo = function(){
    console.log(`Hello js user, ${this.name}`);
}
console.log(jsUser.greetingTwo());