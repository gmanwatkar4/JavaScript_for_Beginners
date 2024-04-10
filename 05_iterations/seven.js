const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const newNums = myNums.map((num) => num + 10) // map automatically return values
console.log(newNums);

// chaining

const newNums1 = myNums
                    .map((nums) => nums * 10)
                    .map( (nums) => nums + 1)
                    .filter((nums) => nums >= 40)
console.log(newNums1);
