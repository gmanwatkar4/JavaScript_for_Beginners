const tinderUser = new Object()
tinderUser.id = "123abc"
tinderUser.name ="SAM"
tinderUser.isLoggedIn = false
console.log(tinderUser);

const regularUser = {
    email: "gm@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Gaurav",
            lastname: "Manwatkar"
        }
    }
}

console.log(regularUser.fullname);
console.log(regularUser.fullname.userfullname);
console.log(regularUser.fullname.userfullname.firstname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = Object.assign({}, obj1, obj2)
const obj4 = {...obj1, ...obj2}
console.log(obj3);
console.log(obj4);

console.log(tinderUser);
console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty("isLoggedIn"));

//******************************* Destructuring ************************************

const course = {
    coursename: "js in hindi",
    price: "999",
    courseInstructor: "Gaurav"
}

// course.courseInstructor

const {courseInstructor : instructor} = course // destructuring of object
console.log("Course Instructor:", instructor);