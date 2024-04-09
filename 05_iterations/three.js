// for of

// ["", "", ""]
// [{}, {}, {}]

const arr = [1, 2, 3, 4, 5]

for (const ar of arr) {
    console.log(ar);
}

const greetings = "hello world"

for (const grret of greetings) {
    console.log(`each char is ${grret}`);
}

// Maps

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', "France")

console.log(map);

for (const [key, value] of map) {
    console.log(key, '->', value);
}

// loop on object

const myObj = {
    'game1': 'NFS',
    'game2': 'spiderman',
    'game3': 'contra'
}

// for (const [key, value] of myObj) {
//     console.log(key, '->', value);
// }

