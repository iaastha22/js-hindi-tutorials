//Immediately Invoked Function Expression (IIFE)  .. a func of js
// to avoid global polluation n to run as soon as define

(function coffee (){
    //name iife as it has name
    console.log(`DB CONNECTED`);
})(); // 1-()function ...2-()execuation call 
// need to end first iife code to run  other by(;) 

(() => {
    console.log(`DB CONNECTED TO SERVER`);   
})();// just give arguments in () to run 

((user) => {
    // iife
    console.log(`DB CONNECTED TO SERVER ${user} `);   
})("krrish")

// its also 2 iife together