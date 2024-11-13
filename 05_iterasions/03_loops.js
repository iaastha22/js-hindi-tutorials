// for of loop
// for (const variable name of jis pe loop lagana hai) {
    
// }

const arr = [1,2,3,4,5]

for (const val  of arr) {
   // console.log(val);
    
}

const greetings = "hello world"
for (const grattude of greetings) {
  //  console.log(grattude)
}

//Maps

const map = new Map()
map.set('In','INDIA')
map.set('USA','UNITED STATE OF AMERICA')
map.set('Fr','FRANCE')
map.set('In','INDIA') // it'll not print it again as map holds unique value n maintain that order
//console.log(map);
for (const [key , value] of map) {
  //  console.log(key ,':-' ,value);
    //by using[]with key we can print key n value diferently
    //console.log(map);
}


const myObject = {
    'game1': 'supermario',
    'game2':'subway sufers'
}

// for (const[ gamezer] of myObject) {
//     console.log(gamezer ,':-', value);
    
// }itll not work on obj