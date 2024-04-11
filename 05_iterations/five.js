// for each loop

const coading = ["js", "ruby", "java", "python", "cpp"]

coading.forEach(function (item) {
    console.log(item);
} ) // call back function dont have any name

coading.forEach( (item) => {
    console.log(item);
})

function printMe(item){
    console.log(item);
}

coading.forEach(printMe)

coading.forEach( (item, index, arr) => {
    console.log(item, index, arr);
})

const myCoading = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    }
]

myCoading.forEach((item) => {
    console.log(item.languageName);
})