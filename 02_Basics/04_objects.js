// more on objects

// creating tinderUser object

const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name ="SAM"
tinderUser.isLoggedIn = false

console.log("tinderUser object : ", tinderUser);    // tinderUser object :  { id: '123abc', name: 'SAM', isLoggedIn: false }

// userfullname object inside fullname object (objects in object)

const regularUser = {
    email: "gm@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Gaurav",
            lastname: "Manwatkar"
        }
    }
}

console.log(regularUser.fullname);  // { userfullname: { firstname: 'Gaurav', lastname: 'Manwatkar' } }
console.log(regularUser.fullname.userfullname);     // { firstname: 'Gaurav', lastname: 'Manwatkar' }
console.log(regularUser.fullname.userfullname.firstname);   // Gaurav

// assiging objects to objects

const obj1 = {1: "a", 2: "b"}   
const obj2 = {3: "a", 4: "b"}   
const obj3 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2}

console.log("obj3 : ", obj3);   // obj3 :  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }
console.log("obj4 : ", obj4);   // // obj4 :  { '1': 'a', '2': 'b', '3': 'a', '4': 'b' }

console.log("tinderUser : ", tinderUser);   // tinderUser :  { id: '123abc', name: 'SAM', isLoggedIn: false }
console.log("keys : ", Object.keys(tinderUser));    // keys :  [ 'id', 'name', 'isLoggedIn' ]
console.log("values : ", Object.values(tinderUser));    // values :  [ '123abc', 'SAM', false ]
console.log("entries : ", Object.entries(tinderUser));  // entries :  [ [ 'id', '123abc' ], [ 'name', 'SAM' ], [ 'isLoggedIn', false ] ]

console.log("hasOwnProperty : ", tinderUser.hasOwnProperty("isLoggedIn"));  // hasOwnProperty :  true

//**************************************** Destructuring ************************************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Gaurav"
}

console.log("course instructor : ", course.courseInstructor) // course instructor :  Gaurav

const {courseInstructor : instructor} = course // destructuring of object
console.log("Course Instructor : ", instructor); // Course Instructor : Gaurav