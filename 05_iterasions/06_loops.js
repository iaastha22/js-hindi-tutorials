// const coding = ["js", "ruby", "java","python","cpp"]


// const values = coding.forEach( (item) =>{
//     console.log(item);
//     return item
    
// } )
// console.log(values); // for each dn't return value


const myNums =["1","2","3","4","5","6","7","8","9","10"]

const newNums = myNums.filter( (num) => num > 4)//.filter also cll by value after that give a condition once values fulfill condition ,those who can't value will return back
console.log(newNums);
// const newNums = myNums.filter( (num) => {
//    return  num > 4 //if we start scope need to add return keyword
// })