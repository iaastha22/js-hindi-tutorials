//array 
/* resizeable n can be mix of diff. datatypes...... zero-indexed...... copy operations create shallow copies(like heap memory) */

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["spiderman", "batman","perman"]

const myArr2 = new Array(1, 3, 5, 9, 5)
//console.log(myArr2[1]);

// Arrays Methods

myArr.push(6)         //add new vlue at end n print all the values
myArr.pop()           // remove the last value inside array

myArr.unshift(5)      //add value at start of array
myArr.shift()         //remove first value at start of array

// console.log(myArr.includes(9));  //replies as true or false 
// console.log(myArr.indexOf(4));   //-1 if valus don't exist 

const newArr = myArr.join()   //convert array into string n bind i too

// console.log(myArr);
// console.log(newArr);


// slice,splice 

//console.log("A", myArr);

const myn1 = myArr.slice(1,4)

// console.log(myn1);
// console.log("B", myArr);

const myn2 = myArr.splice(1, 4)   //manupliate actual array value
// console.log(myn2);
// console.log("c", myArr);

