const name = "krrish"
const repoCount = 50

//console.log(name + repoCount + "value"); just aoutdated way intead use

console.log(`it's ${name} n my repocount is ${repoCount} `);

const gameName = "krrish-bharwaj-coding" 

//const gameName = new String('krrish') //string can be declared like this too

//console.log(gameName[1]);

// syntax to use string proto  console.log(variableName.__proto__)
 
const newString = gameName.substring(2, 6)
console.log(newString);

const anotherString = gameName.slice(-8, -2) // here it'll return empty string as slice doesn't work in reverse it expects start should be lesser than end
console.log(anotherString);

const newStringOne = '      krrish         '
console.log(newStringOne);
console.log(newStringOne.trim());  //only for white spaces

const url = "https://krrish.com/krrish%20bhardwaj";

console.log(url.replace('%20', ' '));

console.log(url.includes('%20'));

console.log(url.includes('55'));

console.log(gameName.split('-'));


