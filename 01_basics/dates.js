 //dates

 let myDate = new Date()      // it's a object
//  console.log(myDate.toString());
//  console.log(myDate.toDateString());
//  console.log(myDate.toISOString());
//  console.log(myDate.toJSON());
//  console.log(myDate.toLocaleDateString());
//  console.log(myDate.toLocaleString());
//  console.log(myDate.toTimeString());
//  console.log(myDate.toLocaleTimeString());

//  let myCreatedDate = new Date(2024, 0, 23)    //months start with 0 in js
//  console.log(myCreatedDate.toDateString());
let myCreatedDate = new Date("02-22-2024") 
//console.log(myCreatedDate.toLocalString());


let myTimeStamp = Date.now()

// console.log(myTimeStamp); // it'll show you the ms since the date js cretaed till now
// console.log(myCreatedDate.getTime()); // it'll show the time from given respected date to now
// console.log(myCreatedDate.getDate());
// console.log(myCreatedDate.getDay());
// console.log(myCreatedDate.getHours());
// console.log(myCreatedDate.getFullYear());
// console.log(myCreatedDate.getMonth());
//console.log(Math.floor(Date.now()/1000));   //to convert ms into sec    math.floor is used just to avoid decimal vales

let newDate = new Date()
//console.log(newDate);

newDate.toLocaleString('default', {
    weekday:"long"
})
console.log(newDate);
