class User{
    constructor(username){
        this.username = username
    }
    
    logMe(){
        console.log(`Username: ${this.username}`);
    }

     static createId(){
        return`123` 
    }
}

const krish = new User("krrish")
//console.log(krrish.createId())  //give erroe as static property doesn't allow to excesscreateId

class Teacher extends User{
    constructor(username, email ){
         super(username)
         this.email = email
    }
}

const lappy = new Teacher("lappy", "lappy@2.com")
console.log(lappy.createId());
