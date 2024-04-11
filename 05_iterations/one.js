// for loop on number array

for (let i = 0; i <= 10; i++) {
    const element = i;
    if (element == 5) {
        console.log("5 is the best number");
    }
    console.log(element);   
}

for (let i = 1; i <= 10; i++) {
    console.log(`table of : ${i}`);
    for (let j = 1; j <= 10; j++) {
        //console.log(`inner loop value ${j} and inner loop ${i}`);
        console.log(i + ' * ' + j + ' = ' + i*j);
    }
}

// for loop on string arrays

let myArray = ["flash", "batman", "superman"]
    console.log("myArray length: ", myArray.length);

for (let i = 0; i < myArray.length; i++) {
    const element = myArray[i];
    console.log("myArray value:", element);
}

// break and continue

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("5 detected!");
        break
    }
    console.log(`value of i is ${i}`);
}

for (let i = 1; i <= 20; i++) {
    if (i == 5) {
        console.log("5 detected!");
        continue // 1 times condition skipped
    }
    console.log(`value of i is ${i}`);
}