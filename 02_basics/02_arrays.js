const marvel_heros = ["thor", "Ironman", "Spiderman"]
const dc_heros = ["Superman","flash", "batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);   //it takes dc as array only

const allHeros = marvel_heros.concat(dc_heros) // combines arrays n returns new array
//console.log(allHeros);

const all_new_heros = [...marvel_heros , ...dc_heros]   // work same as concat
//console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6,], 7, [2, [9, 6,]]]

const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);


console.log(Array.isArray("krrih"));        //check wheather its array or not
console.log(Array.from("krrish"));         // converts value itno array
console.log(Array.from({name:"krrish"}));  //interested point ........ if it can't convert it return empty array


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3)); // work as .from

console.log(score1);
