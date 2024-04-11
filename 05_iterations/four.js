// accessing values via key 

const myObj = {
    js: 'javascript',
    cpp: 'C++',
    rb: 'ruby',
    swift: 'swift by apple'
}

// accessing values in objects via key

for (const key in myObj) {
   console.log(`${key} shortcut is for ${myObj[key]}`); 
}

// accessing values in array via keys

const programming = ['js', 'ruby', 'py', 'java', 'cpp']

for (const key in programming) {
console.log(programming[key]);
}

// accessing values in maps via keys

const map = new Map()
map.set('IN', 'India')
map.set('USA', 'United States of America')
map.set('FR', "France")

for (const key in map) {
    console.log(key);
}