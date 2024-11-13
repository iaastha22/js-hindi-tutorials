//if    

// if (4 !== "krrisj") {
//     console.log("hey");  
// }

// const temperature =15
// if (temperature > 28) {
//     console.log("harsh weather");
// } else{
//      console.log("nice weather");
//      }
// console.log(" moderate"); always execute as it's not a part of if statement

// const score = 500
// if (score>150) {
//     let power = "fly"
//     console.log(`user power ${power}`);
// }
// console.log(`user power ${power}`); // error:- power is not efine in global env

const balance =2000
// if(balance>50) console.log("low balance"); // implicite scope......run without {} but just one line
// if(balance>50) console.log("low balance"),console.log("add some money"); // run like this but immature code;

// if (balance > 2000) {
//     console.log("salary credit");
// } else if(balance == 5000){
//     console.log("bills pad");
// }else if (balance <=2000){
//     console.log("savings done");
// } else {console.log("out of balance");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromgoogle = true
const loggedInFromGmail = true

if (userLoggedIn && debitCard && 5!=6) {
    console.log("allow to shop ");  
}

if (loggedInFromGmail|| loggedInFromgoogle ) {
    console.log("user logged in");
}