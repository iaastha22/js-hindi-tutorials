class User {
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}
// extend is same as prototype
class Teacher extends User {
    constructor(username, email, password){
        super(username) // automatically check the extends n goes to class take this n give refernce
        this.email = email
        this.password = password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const lucy = new Teacher("lucy", "lucy@123", "123")

lucy.addCourse()
// lucy.Teacher()

const Jack = new User("Jack")

Jack.logMe()
// Jack.Teacher()

console.log(lucy instanceof Teacher);
console.log(lucy === Jack);
console.log(Jack instanceof Teacher);


