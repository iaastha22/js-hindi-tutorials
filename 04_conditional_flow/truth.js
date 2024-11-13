// const userEmail =" krrish@hehe" 
// if (userEmail) {
//     console.log("welcome user");
// }else{
//     console.log("try again");
// }     //run prefectly..treated as true

// const userEmail ="" 
// if (userEmail) {
//     console.log("welcome user");
// }else{
//     console.log("try again");
// }     //run prefectly.... empty string trated as false

// const userEmail =[] 
// if (userEmail) {
//     console.log("welcome user");
// }else{
//     console.log("try again");
// }     //run prefectly treated as true 



/*falsy values:-
  false, 0, -0, "", bigInt(a value is their 0n, null, undefined, NaN);

  #truthy values:-
  "0"(zero inside string is truthy value), "false", " ", [], {}, function(){}(empty function);
*/

// const userEmail =[]  
// if (userEmail.length === 0){
//     console.log("Array")
// } // to check empty array

// const emptyObj ={} 
// if (Object.keys(emptyObj).length ==0) {
//     console.log("object")
// } // to check empty object ...... with Object.key calls it key which will come like array, simly check length of array 

// Nulish Coalescing Operator (??): null undefined 
//returns (letside value ) when there is 2 value but if in letside value is null/undefined returns(rightside value)

let val1;
// val1 = 5 ?? 40
// val1 = null ??50
//  val1 = undefined ??"50"
//val1 = null ??50 ?? 10 // assign first coming value
//console.log(val1);


// terniary Operator
//condition ? true : false //syntx

const iceTeaPrice = 100
iceTeaPrice <=80 ? console.log("in budget") : console.log("high price");

