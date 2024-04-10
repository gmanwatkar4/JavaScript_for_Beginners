// Dates in javascript

let myDate = new Date()
console.log("Return type of Date : ", typeof myDate); // return object
console.log("Date to String : ", myDate.toString()); // Sat Apr 06 2024 17:50:51 GMT+0000 (Coordinated Universal Time)
console.log("Date to Date String : ", myDate.toDateString()); // Sat Apr 06 2024
console.log("Date to Locale String : ", myDate.toLocaleString()); // 4/6/2024, 5:50:51 PM

// in javascript months starts from 0

let myCreatedDate = new Date(2024, 3, 6)
console.log("toDateString : ", myCreatedDate.toDateString());   // toDateString :  Sat Apr 06 2024

let myCreatedDate1 = new Date(2024, 3, 6, 4, 8, 11)
console.log("toLocaleString : ", myCreatedDate1.toLocaleString()); // toLocaleString :  4/6/2024, 4:08:11 AM

let myCreatedDate2 = new Date("2024-04-06")
console.log("toLocaleString : ", myCreatedDate1.toLocaleString()); // toLocaleString :  4/6/2024, 4:08:11 AM

let myTimeStamp = Date.now()
console.log("timestamp in miliseconds : ", myTimeStamp);    // timestamp in miliseconds :  1712768685975
console.log("Get time : ", myCreatedDate2.getTime());   // Get time :  1712361600000
console.log("Convert to seconds : ", Math.floor(Date.now()/1000));  // Convert to seconds :  1712768685

let newDate = new Date()
console.log("Get month : ", newDate.getMonth());    // Get month :  3
console.log("Get day : ", newDate.getDay());    // Get day :  3

let weekDay = newDate.toLocaleString('default',{
    weekday: "long"
})

console.log("weekday : ", weekDay);     // weekday :  Wednesday