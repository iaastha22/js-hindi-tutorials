const myNumers = [1,2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNums = myNumers.map ( (num) => num +10)
 //chaining... using of2-3 methods alll together like map in map aur fiter in map
const newNums =  myNumers.map( (num) => num *10).map( (num) => num / 10).filter((num) => num >= 2 && num % 2)

console.log(newNums);
