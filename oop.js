
     //object literals

const user = {
     username:"krrish",
     loginCount:8,
     signeIn: true,

     getUserDetails: function(){
          console.log("Got user details from database");
          console.log(`Username: ${username}`);
          console.log(this);
     }
}// in js object are objec litrals; basic unit;like they had classes it has object literal
// this. refers to current context
// console.log(user.username);
// console.log(user.getUserDetails);
// console.log(`Username: ${this.username}`);
// console.log(this);//here in global it will reference to windows obj

// const promiseOne = new Promise()
// const date = new Date()
//new keyword is actually a constructor func. which allows you to create multiple instance from one Object literal

//eg:-
      function User(username,loginCount,isLoggedIn){
          this.username = username;
          this.loginCount = loginCount;
          this.isLoggedIn = isLoggedIn
          //we can even add method here
          this.greeting = function(){
               console.log(`Welcome ${this.username}`);
               
          }

          return this //return use to send value back to caller
      }

const userOne = new User("krrish", 12, true)
const userTwo = new  User("lucy", 11, false)
//by using new we are working in new instance(an empty keyword generate which is a new obj; a constructor funct call bec of new keyword; all arguments get inject in (this);u get that in func;) of user so that it can't manipulate the real info
console.log(userOne.constructor);
console.log(userTwo);
//instanceof to check wheather its a instance of that obj aur not

