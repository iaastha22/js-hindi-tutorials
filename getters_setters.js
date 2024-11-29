class User {
    constructor(email, password){
        this.email = email
        this.password = password
    }
    get password(){
        return`${this._password}LUCY`
    }
    set password(value){
         this._password =value //setter don/t return
    }

    get email(){
        return this._email.toUpperCase()  //getter lgne ke liye
    }

    set email(value){
        this._email = value.toUpperCase()
    } //here constructor n setter both are setting value which will lead to maximmum call stack size exceed...... to slove this create a new property while using set
}

const krrish = new User("k@b", "abc")
console.log(krrish.email);
console.log(krrish.password);
