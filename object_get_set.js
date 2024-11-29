const  User = {
   _email: 'krrish.',
   _password: "123",

    get email(){
           return this._email.toUpperCase()
    },

    set email(value){
        this._email = value
    }

}
// User.email = 'coffee.com';
// console.log(User.email);

const tea = Object.create(User)
console.log(tea.email);
//get n set just overwrite the value while getying n sending back to callstack