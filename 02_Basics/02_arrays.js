const marvel_heros = ["Thor", "Ironman", "Spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// here, dc_heros not merged with marvel_heros, its adding entire dc_heros at the end of marvel_heros (arrays in array)
marvel_heros.push(dc_heros)
console.log("Marvel heros: ", marvel_heros); 
console.log("length of marvel_heros: ", marvel_heros.length);

const marvel_heros1 = ["Thor", "Ironman", "Spiderman"]
const dc_heros1 = ["superman", "flash", "batman"]

const allHeros = marvel_heros1.concat(dc_heros1)
console.log("All heros: ", allHeros);

// ... spread operator
const allNewHeros = [...marvel_heros1, ...dc_heros1]
console.log("All new heros: ", allNewHeros);

const anotherArr = [1, 2, 3, [4, 5, 6], 7, [8, 9, [0, 1, 2]]]
const realAnotherArr = anotherArr.flat(Infinity)
console.log("Real another array: ", realAnotherArr);

console.log("isArray:", Array.isArray("Gaurav"));
console.log("from:", Array.from("Gaurav"));
console.log("from:", Array.from({name: "Gaurav"}));

let score1 = 100
let score2 = 200
let score3 = 300

console.log("Array of: ", Array.of(score1, score2, score3));