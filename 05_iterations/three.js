// for loop and map()

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const ar of arr) {
    console.log(ar);    // prints 1 to 5
}

const greetings = "hello world"

for (const grret of greetings) {
    console.log(`each char is ${grret}`);   // print each character on new line
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', "France")

console.log(map);   // prints map

for (const [key, value] of map) {
    console.log(key, '->', value);  // print in key : value form
}

// loop on object

const myObj = {
    'game1': 'NFS',
    'game2': 'spiderman',
    'game3': 'contra'
}

/*  TypeError: myObj is not iterable

    for (const [key, value] of myObj) {
        console.log(key, '->', value);
    }
*/