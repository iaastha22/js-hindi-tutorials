const descripter = (Object.getOwnPropertyDescriptor(Math, "PI"))                    // to know about object property specifically
console.log(descripter);


// console.log(Math.PI);
// Math.PI = 5
// console.log(math.PI);

const coffee = {
    name: 'balck coffee',
    price:300,
    isAvaliable:true,

    orderCoffee : function(){
        console.log("code fat gya");
    }
}
console.log(coffee);
// console.log(Object.getOwnPropertyDescriptor(coffee));//undefine as coffee is object jo we have to define that which topic we're taking about
console.log(Object.getOwnPropertyDescriptor(coffee,"name"));

Object.defineProperty(coffee, 'name',{
    //  writable:false,
       enumerable: false,
})

console.log(Object.getOwnPropertyDescriptor(coffee,"name"));

//objects are not iterable, so use Object..entries to iterate that
for (let [key, value] of Object.entries(coffee)) {
   if (typeof value !=='function') {
    console.log(`${key} : ${value}`);
   }
}