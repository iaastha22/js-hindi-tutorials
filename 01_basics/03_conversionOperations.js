let  score  = "33abc"

//const {score} = req.body here we don't know what actually score is

//console.log(typeof score);
//console.log(typeof(score));

let valueInNumber = Number(score)
//console.log(typeof valueInNumber);
//console.log(valueInNumber);   

//NaN stands as not a number but its type is number
// while converting into number string n undefine  gives nan value while null gives 0,boolean give 0/1


let isLoggedIn = 1
 
let booleanIsLoggedIn = Boolean (isLoggedIn)
//console.log(booleanIsLoggedIn);

// 1 =>true ; 0=>false
//"" => false 
// "hitesh" =>true 


let someNumber = 33
let stringNumber = String(someNumber)

//console.log(stringNumber);
//console.log(typeof stringNumber);



//*********************************************Operaions**************************************/

let value =3
let negValue = -value
//console.log(negValue)

// console.log(2+2);
// console.log(2-2);
// console.log(2*2);
// console.log(2**3);  //power
// console.log(2/2);
// console.log(2%5);

let str1 = "hello"
let str2 = " krrish"

let str3 = str1+str2
//console.log(str3)

// console.log("1" + 2 );
// console.log("1" + 2 + 2 );
// console.log(1 + "2" );
// console.log(1 + 2 + "2" );

let gameCounter =50
gameCounter++;
++gameCounter;
console.log(gameCounter);







