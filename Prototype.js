// let myName ="krrish       "
// let myPet = "lucy"

// console.log(myName.trueLength);   simply want that it remove extra space n return true length
// for that let's create a method


let myHero = ["thor","spiderman","ironman"]


let  heroPower = {
    thor: "hammer",
    spiderman: "web",
    ironman: "suit",

//now if I have to declare any method than...what i'll do?
getSpiderPower: function(){
    console.log(`Spidy power is ${this.spiderman}`);
   }
}

//what if we want that whenever anyObj declared...declare it's base in that only
Object.prototype.krrish = function(){
    console.log(`krrish is present in all objects`);
}
//let check what if we give power to array will it insert in obj too?
Array.prototype.heykrrish = function(){
    console.log(`hello to system`);
}



// heroPower.krrish()        //can we declare any obj like this?
// myHero.krrish()
// myHero.heykrrish()
// heroPower.heykrrish()  array will not share the power


//+++++++++++++++++++++++++++Inheritence

const User = {
    name:"lucy",
    email:"lucy@123",
}
const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvaliable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime:true,    // to attach/give referne to other obj ...
    __proto__:TeachingSupport
}

.__proto__= User
//it's quite outdated 


//modern syntax
Object.setPrototypeOf(TeachingSupport,Teacher)

//now to reslove our query of getting truelength property..let's just

let anotherUsername = "CodewithMe         "

String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`true length is: ${this.trim().length}`);
    
}

anotherUsername.trueLength()
"krrish".trueLength()
"burger".trueLength() 
//now here this will give refernce to krrish;burger as they are called