// Dates

let myDate = new Date()
console.log("Return type of Date: ", typeof myDate); // return object
console.log("Date to String: ", myDate.toString()); // Sat Apr 06 2024 17:50:51 GMT+0000 (Coordinated Universal Time)
console.log("Date to Date String: ", myDate.toDateString()); // Sat Apr 06 2024
console.log("Date to Locale String: ", myDate.toLocaleString()); // 4/6/2024, 5:50:51 PM

let myCreatedDate = new Date(2024, 3, 6)
console.log(myCreatedDate.toDateString()); // in javascript months starts from 0

let myCreatedDate1 = new Date(2024, 3, 6, 4, 8, 11)
console.log(myCreatedDate1.toLocaleString());

let myCreatedDate2 = new Date("2024-04-06")
console.log(myCreatedDate1.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);
console.log("Get time: ", myCreatedDate2.getTime());
console.log("Convert to seconds: ", Math.floor(Date.now()/1000));

let newDate = new Date()
console.log("Get month: ", newDate.getMonth());
console.log("Get day: ", newDate.getDay());

newDate.toLocaleString('default',{
    weekday: "long"
})