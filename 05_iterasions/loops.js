// for loop
 
// for (let index = 0(variable declared which is 0); index < array.length(condition check); index++()) {
//     const element = array[index];(after condition check lop directly jump..after execuation of it then it oes out on index++)
// }   syntx

// for (let index = 0; index < 10; index++) {
//     const  element = index 
//     console.log(element);
// }
// for (let i = 0; i >null ?? 10; i++) {
//     const  element = i 
//     console.log(element);
// }

for (let i = 0; i < 10; i++) {
    const element = i;
    //console.log(element);
    if (i==5) {
        //console.log("half part");
    } 
}
for (let i = 0; i < 2 ; i++) {
    // console.log(`OUTTER LOOP = ${i}`);
   for (let j = 0; j < 5; j++) {
    // console.log(`INNER LOOP IS ${j} and inner loop ${i}`);
    //  console.log(i +'*' + j +'=' +i*j);
   } 
}  
 let myArray = ["Spierman", "thor", "thanos"]
for (let index = 0; index < myArray.length; index++) {
    const element =myArray[index];
   // console.log(element);   
}


//Break n Continue

// for (let index = 2; index <= 20; index++) {
//     if (index==5) {
//         console.log(`detected 5`);
//         break;
//     }
//    console.log(`value of i is ${index}`); 
// }
for (let index = 2; index <= 20; index++) {
    if (index==5) {
        console.log(`detected 5`);
        continue;
    }
   console.log(`value of i is ${index}`); 
}