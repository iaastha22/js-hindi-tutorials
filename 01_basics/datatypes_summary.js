         // js is a dynamically type lang. as we need not to define datatype before delcaration

// datatypes are of two categories(depends how they're stored in memory n can access )

/*Primitive (call by value) 
 7types:- String, Number, BigInt, Boolean, null, Undefined, Symbol   
 eg;-
     
 const id = Symbol('123')
   const anotherId = Symbol('123')

   console.log(id == anotherId);
   console.log(id === anotherId);
   console.log(typeof id );
   const bigNumber = 458n
   console.log(typeof bigNumber);
 
 */

/*non primitve or reference 
  Array, Objects, Functions (datatype of them is always object while for function its function obj)
  
  eg;-
  const heros = ["shaktiman", "naagraj", "doga"];  //Array always in []
let myObj = {
    name:"krrish",
    age:20,
}    // object in {}

const myFunction = function(){
     console.log("hey krrish");
     
}       // function as (){} togther

  console.log(typeof heros);
  console.log(typeof myObj);
  console.log(myFunction);
*/

  
  //++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++
  
  //meories:-  Stack (use in Primitive) i.e.gives you a copy of variable declared , Heap( use in Non-Primtive)i.e. gives a refernce of org variable that is declared

  let myYoutubename = "randomcoding"

  let anothername = myYoutubename
  anothername = "codewithkrrish"

  console.log(myYoutubename);
  console.log(anothername);

  let userone = {
    email: "me@yahoo.com",
    upi: "123@ybl",
  }
  
  let usertwo = userone;
   userone.email = "hey@google.com";

   console.log(usertwo);
   