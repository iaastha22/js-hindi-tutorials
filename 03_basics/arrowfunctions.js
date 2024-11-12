const user = {
    username: "krrish",
    price: 599,
    
    welcomeMessage: function() {
       // console.log(/*this. refers to current context */`${this.username} , welcome to wersite`);
        //console.log(this);
        
        
    }
}

// user.welcomeMessage()
// user.username = "lucy"
// user.welcomeMessage()//we didn't hardcode value,we just ask for current context
//console.log(this);//empty {} bec in node global scope is empty untill instilised outside a function


// function coffee() {
//     let username = "krrish" //undefine as it's a standlone func this not as a method of obj ..... (this.)works for global variables in node env
//     console.log(this.krrish);
// }
// coffee()

// const coffee = function() {
//     let username ="krrish"
//     console.log(this.username);// undefined
// }
// coffee()

const coffee = () => /*this is arrowfunction */ {
    let username ="krrish"
    console.log(this);// undefined
}
// coffee()

//() => {}//syntax of arrowfunction
// const addTwo = (num1, num2) =>{
//     return num1 + num2
// } // basic arrowfun

//const addTwo = (num1, num2) => num1 + num2 // Impicit return.. if single expression you can write it like this
// const addTwo = (num1, num2) =>{user: " krrish"} //undefined as objects can't define without () 
const addTwo = (num1, num2) =>({user: " krrish"})
console.log(addTwo(5, 6));