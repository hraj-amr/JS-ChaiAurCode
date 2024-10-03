// Dates

let myDate = new Date()
// console.log(myDate)           // 2024-10-03T02:03:38.867Z (not in readable format)
// console.log(myDate.toString())      // Thu Oct 03 2024 02:03:38 GMT+0000 (Coordinated Universal Time)
// console.log(myDate.toDateString());     // Thu Oct 03 2024
// console.log(myDate.toISOString())       // 2024-10-03T02:03:38.867Z
// console.log(myDate.toJSON())            // 2024-10-03T02:03:38.867Z
// console.log(myDate.toLocaleDateString())        // 10/3/2024
// console.log(myDate.toUTCString())           // Thu, 03 Oct 2024 02:03:38 GMT
// console.log(myDate.toLocaleString())        // 10/3/2024, 2:03:38 AM
// console.log(typeof myDate)      // object

// let myCreatedDate = new Date(2024, 0, 15)       // (yy, mm, dd) month starts from 0
// let myCreatedDate = new Date(2024, 0, 15, 7, 30)    // (yy, mm, dd, hours, min)
// let myCreatedDate = new Date("2024-01-15")          // (yy-mm-dd) month starts from 01
let myCreatedDate = new Date("01-15-2024")          // (mm-dd-yy)
// console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime())
// console.log(Math.floor(Date.now()/1000))


let newDate = new Date()
console.log(newDate);
console.log(newDate.getDay())
console.log(newDate.getMonth() + 1)       // since month starts with 0 so we do +1
console.log(newDate.getUTCDate())

// `${newDate.getDay()} and the time is`       // string interpolation

newDate.toLocaleString('default',{
    weekday:'long'             // (ctrl + space) to get more options
})
