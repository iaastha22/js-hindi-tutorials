 //can easily use in cart n totally of bills
 // reduce(
//     (accumulator, currentValue) => accumulator + currentValue,
//     initialValue,
//   );  accumulator:-first time it take initialValue ... after that takes the sum of/outcome of accumulator+ currentValue(value jo aa rhi hai vo) n keep repeating that 
//   currentValue:- array's value
//   initialValue:-we have to declare that


const myNums = [1,2,3]

// const myTotal = myNums.reduce( function (accumulator, currentValue) {
//     console.log(`acc: ${accumulator} and curr:${currentValue}`);
    
//     return accumulator + currentValue
// }, 5 )

const myTotal = myNums.reduce( (acc, curr) => acc+curr, 0)

console.log(myTotal);



const shoppingCart = [
    {
        itemName: "js course",
        price: 299
    },
    {
        itemName: "java course",
        price: 599
    },
    {
        itemName: "react js course",
        price: 699
    },
    {
        itemName: "next.js course",
        price: 499
    },
    {
        itemName: "cpp course",
        price: 399
    }
]

const cousesTotal = shoppingCart.reduce( (acc,item) => acc + item.price,0)
console.log(cousesTotal);
// for actual website need to verify it's num or not