// Immediate Invoked Function Expressions (IIFE)

// (function definition) (execution)

// In IIFI we have to wrap a function in () and have to add () at the end of the line as shown below

(function db1(){ 
    // db1 is a named IIFE, as function name is given
    console.log(`DB1 connected...`);
})(); // to end the execution we have to give ; at the end

// to remove the global declaration polution we have to use IIFE 

(() => {
    console.log(`DB2 connected...`);
})();

// parameter to arrow function IIFE

((name) => {
    console.log(`DB3 connected to ${name}...`);
})("gaurav")
