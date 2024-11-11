//objects constractor
//const tinderUser = new Object()    //singleton object

const tinderUser = {}
tinderUser.id ="abc1"
tinderUser.name = "lucy"
tinderUser.isLoggedIn = true
// console.log(tinderUser);

const regularUser = {
    email: "some@one.com",
    fullname: {
        userfullname:{
            firstname:"lucy",
        lastname:""
        }
    }
}

//console.log(regularUser.fullname.userfullname.lastname);

const obj1 = {1:"a",2:"b"}
const obj2 = {11:"a",4:"b"}
const obj3 = {10:"a",5:"b"}

//const obj4 = Object.assign({},obj1, obj2 ,obj3) //byusing{}obj will asign in that other it will go in 1st one(targt)
const obj4 = {...obj1,...obj2,...obj3}
//console.log(obj4);


//if values are coming from database 
//eg:-
       const users = [
        {
            id: 1,
            email:"lucy@google.com"
        },
        {
            id: 1,
            email:"lucy@google.com"
        },
        {
            id: 1,
            email:"lucy@google.com"
        },
        {
            id: 1,
            email:"lucy@google.com"
        },
       ]

//if we have to loop through values or value print

users[1].email //syntax

// console.log(tinderUser);
//console.log(Object.keys(tinderUser)); //to access keys of it...comes as arryay
//console.log(Object.values(tinderUser)); // to access values of it.. coes as array
//console.log(Object.entries(tinderUser)); //makes key values as array [[name:krrish]]
//console.log(tinderUser.hasOwnProperty('Address')); // to check property is there


               //destructuring of objects
const course = {
    coursename: "js",
    price: "999",
    courseInstructors: "hitesh",
}

//course.courseInstructors(to print th e value of it)
const {courseInstructors:lec} = course  //in {value jo extract} = from where value extract      :we can gie new name to it
console.log(lec);

// {
//   "name":"krrish",
//   "coursename":"js",
//   "price":"free",
// } //just bec it don't have name that'swhy, it'll treated as JSON where keys n values both are string
// sometimes api info come as array too
//eg:- 
[
    {},
    {},
    {}
]