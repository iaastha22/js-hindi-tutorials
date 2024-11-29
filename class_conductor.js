//this all done after ES6

// class User {
//     constructor(username, email, password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }
//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     chnageUsername(){
//         return`${this.username.toUpperCase()}`
//     }
// } //as soon as an object initialisation of obj take place constructor is callled

// const lucy = new User("lucy","lucy@fb.com","123")
// console.log(lucy.encryptPassword());
// console.log(lucy.chnageUsername());

//behind the scene 
function User(username, email, password){
    this.username = username
    this.email = email
    this.password = password
}

User.prototype.encryptPassword = function(){
     return `${this.password}abc`
}
User.prototype.chnageUsername = function(){
    return `${this.username}abc`
}

const lucy = new User("lucy","lucy@fb.com","123")
console.log(lucy.encryptPassword());
console.log(lucy.chnageUsername());