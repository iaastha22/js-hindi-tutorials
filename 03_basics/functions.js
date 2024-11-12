//in js undefined n ("") by default considered as false value

// function sayMyName(){
//     console.log("k");
//     console.log("r");
//     console.log("i");
//     console.log("s");
//     console.log("h");
// } // synatx

//sayMyName//refernce of function
//sayMyName()//to excecute function

// function addTwoNumbers(number1, number2/*parameters*/){
//     console.log(number1 + number2);
// }
//const result = addTwoNumbers(6 , 7/*arguments */)// we need to give arguments

//console.log("Result:" , result); // result value is undefined

function addTwoNumbers(number1, number2/*parameters*/){
//   let result = number1 + number2
//   return result  // anycode written after retuwn will not execute
               //or we can just write
    return number1 + number2           
}
const result = addTwoNumbers(6 , 7/*arguments */)
//console.log("Result:" , result);



function loginUserMessage(userName){
    return `${userName} just logged in`
}
//loginUserMessage("krrish") //function'll execute but print nothing 
//console.log(loginUserMessage("krrish")); //now value would return too
/* console.log(loginUserMessage())if we keep it empty ....returns as undefinedk */ 
//to stop that we can simply use if statement here

function loginUserMessage(userName /* userName = user, now it never return undefine */){
    if(userName === undefined /* or (!simplyreverse the value)!undefined */){
        console.log("please enter a username");
        return
    }
    return `${userName} just logged in`
}
//console.log(loginUserMessage());

/*************what if we have multiple arguments *********************/
// spread n rest operators have same symol(...)


//function calculateCatePrice(val1, val2, ...num1)returns values after val2 in array not all
function calculateCatePrice(...num1){
    return num1
}
//console.log(calculateCatePrice(500, 700, 600, 800, 8999));

/* to pass a object */

 const user = {
    username: "krrish",
    prices: 299
}

function handleObject(anyobject)/*write anyobjct istead of object name */ {
        console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);//objectname n calloutname should be same     
}

//console.log(handleObject(user));
//or we can simply pass it
(handleObject(
    {
        username:"lucy",
        age:"2"
    }
));

/*to pass array */

const myNewArray = [100,500,800,600]
function getSecondValue(giveArray) {
   return giveArray[3]
}
console.log(getSecondValue(myNewArray));
//or 
console.log(getSecondValue([500, 800, 50, 900, 1000]));

