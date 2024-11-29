function User(email, password){
    this._email = email;
    this._password = password

    Object.defineProperty(this,'email', {
        get:function(){
            return this._email
        },
        set: function(value){
            this._email= value
        }
    })
}

const coffee = new User("coffee.com", "chai")
console.log(coffee.email)