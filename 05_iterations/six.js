const coading = ["js", "ruby", "java", "python", "cpp"]

const values = coading.forEach( (item) => {
    console.log(item);
    return item
})

console.log(values); // for each does not return anything, its only prints undefined

// numbers - filter

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.filter( (num) => num > 5) // filter returns the values hence need to store in variable to print them
console.log(newNums);

const newNums1 = myNums.filter( (num) => {
    return num > 5
}) 
console.log(newNums);

// using for each
const newNums2 = []
myNums.forEach( (nums) => {
    if (nums > 5) {
        newNums2.push(nums)
    }
})

console.log(newNums2);

// books array example

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  const userBooks = books.filter( (bk) => bk.genre === "History") 
  let userBooks1 = books.filter( (bk) => bk.publish >= 2000)
  let userBooks2 = books.filter( (bk) => bk.publish >= 1995 && bk.genre === "History")


  console.log(userBooks);
  console.log(userBooks1);
  console.log(userBooks2);
