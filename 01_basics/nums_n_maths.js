const score = 400
//console.log(score);

 const balance = new Number(100)
 //console.log(balance);
 
//console.log(balance.toString());
//console.log(balance.toFixed(2));

const otherNumber =23.5698

//console.log(otherNumber.toPrecision(5));

const hundreds = 1000000000
//console.log(hundreds.toLocaleString(`en-IN`)); //js has some minValue, maxValue,minsafeintzer etc

//++++++++++++++++++++++++++++++++++MATHS++++++++++++++++++++++++++++++++++++++++++++++//

// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.5));
// console.log(Math.ceil(4.1)); // use top value
// console.log(Math.floor(4.9));     //use the last value
// console.log(Math.pow(2 , 3));    ///also use as **


// console.log(Math.random()); // returns a pesudorandom no between 0-1
// console.log((Math.random()*10) + 1); // to shift value to left but stil it can give 0as first number so,
// console.log(Math.floor(Math.random()*10) + 1 ); // .floor ll always give floor value +1 llavoid 0

//sometimes we need to decide min n max value for that
const min = 1
const max = 6
//for this case we use formula as 
console.log(Math.floor(Math.random() * (max-min + 1)) + min); // +1 to aviod zero, + min to avoid number below our range




