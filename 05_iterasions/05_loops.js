//for each loop
const coding = ["java","ruby", "js","python","cpp"] //some loop directly add in properties in array

// coding.forEach( function (value) {
//     console.log(value);
//     //just bec it's a call back func.. iska naam nhi hoga..((param) write anything as it already now wHt inside the func)
// } )

coding.forEach( (item) => {
   // console.log(item);
} )

// function printMe (item){
//     console.log((item));
// }
// coding.forEach(printMe)

// coding.forEach( (item, index,arr) => {
//     console.log(item,index,arr);
// }) // mutli parameters, like:-item,index,arr

const mycoding = [
    {
        languageName:"JS",
        languageFile:"js"
    },
    {
        languageName:"JAVA",
        languageFile:"java"
    },
    {
        languageName:"RUBY",
        languageFile:"rb"
    }
]
mycoding.forEach( (item) => {
    console.log(item.languageName);
    
})