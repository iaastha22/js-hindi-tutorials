// const coding = ["js", "ruby", "java","python","cpp"]


// const values = coding.forEach( (item) =>{
//     console.log(item);
//     return item
    
// } )
// console.log(values); // for-each don't return value 

// const myNums =["1","2","3","4","5","6","7","8","9","10"]

// const newNums = myNums.filter( (num) => num > 4)//.filter also cll by value after that give a condition once values fulfill condition ,those who can't value will return back
// console.log(newNums);
// const newNums = myNums.filter( (num) => {
//    return  num > 4 //if we start scope need to add return keyword
// })

// const newNums = []

// myNums.forEach((num) => {
//     if (num>4) {
//         newNums.push(num)    //push ... basic array method to add value
//     }
// })

// console.log(newNums);
 


const books = [
{ title: 'book-one', genre:'Ficition', publish:1985, edition:2005 },
{ title: 'book-two', genre:'Non-Ficition', publish:1980, edition:2014 },
{ title: 'book-three', genre:'Sciencetific', publish:1975, edition:2004 },
{ title: 'book-four', genre:'fairytale', publish:1885, edition:2000 },
{ title: 'book-five', genre:'history', publish:1965, edition:2005 },
{ title: 'book-six', genre:'Sciencetific', publish:1895, edition:2004 },
{ title: 'book-seven', genre:'mystericious', publish:1985, edition:1990 },
{ title: 'book-eight', genre:'Non-Ficition', publish:1955, edition:2000 },
{ title: 'book-nine', genre:'mystericious', publish:1910, edition:2014 },
{ title: 'book-ten', genre:'history', publish:1980, edition:2004 },

]

let userBooks = books.filter( (bk) => bk.genre === "mystericious")

userBooks = books.filter( (bk) => {
    return bk.publish>=1910 && bk.genre ==="mystericious"
})

console.log(userBooks);

