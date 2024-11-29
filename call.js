function SetUsername(username){
    //complex DB calls
    this.username = username
    console.log("called");
    
}

function createUser(username,email,password){
    // SetUsername(username) //techically n js usernmae is not called just its refernce ahs given......so tho call it we'll use
    SetUsername.call(this, username)//now this hold the refernce of setUsername

    this.email = email
    this.password = password
}

const chai = new createUser("chai","chai@fb.com","123")
console.log(chai);
