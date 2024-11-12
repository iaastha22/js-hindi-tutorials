//scope in chrome envor.(calles as core scope) is different from scope in coding node  envor.
//{} it's scope when use with any fun. if, else....

//var c = 300
let a = 200
if (true) {
    let a = 10
    const b =20
    var c = 30
    //console.log("INNER: ", a);
}
// console.log(a);
// console.log(b);
//console.log(c);
//{in it block scope } outside glober scope

function one() {
    const username ="krrish"
    function two(params) {
        website ="coders.com"
        console.log(username);
    }  
    //console.log(website); error as it's scope ends there
    
    two() //if we don't call it fun. ne will not be called
}

//one()

if (true) {
    const username = "krrish"
    if (username === "krrish"){
        const website ="coders.com"
      //  console.log(username + website);
    }
   // console.log(website);//error it's scope ends 
}
//console.log(username);//error scope ends 


//++++++++++++++++++++++++++interesting++++++++++++++++++


addone(5)
function addone(num) {
    return num+1
}


addTwo(5) //error as it declare later on in this case only
//we call it expression
const addTwo = function (num) {
    return num + 2
}