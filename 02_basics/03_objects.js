/* objects declared in two ways:- Literals, Constructor(Object.create)
if we declared objects from literals it'll not be singleton....but from constructor it'll */

const mySym = Symbol("mykey");
// objects literals 


const JsUser ={
    "fullname": "developer",
    name: "krrish",
    age: 20,
    [mySym]: "it's a symbol value",
    location:"jupiter",
    email: "hehe@Code.com",
    isLoggedIn: true,
    lastLoginDays: ["Wednesday","Friday"],
   
};
//if their are space b/w object key we can't call out that with .methd
// console.log(JsUser.fullname);
// console.log(JsUser["location"]);
// console.log(typeof[mySym]);

JsUser.email = "it'smehehe@hho.com"  //to overwrite values in obj
//Object.freeze(JsUser)    //can't overwrite anything
//console.log(JsUser);



JsUser.greetings = function(){
    console.log("hello Js User");
}
JsUser.greetingsTwo = function(){
    console.log(`hello krrish, ${this.fullname}`)//if we have to refernce any specific key of obj... we use syntax (`message, ${this.name of property}`);
}

console.log(JsUser.greetings());  // wihtout use of() function'll not execute
console.log(JsUser.greetingsTwo());
