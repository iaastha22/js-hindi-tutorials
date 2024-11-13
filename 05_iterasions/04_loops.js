const myObject = {
    js:'javascript',
    cpp:'c++',
    rb:'ruby',
    swift:"swift by apple"
}
for (const key in myObject) {
  // console.log(`${key}  shortcut for ${myObject [key]}`);
}

const programming = ["java","cpp", "js","ruby"]
for (const key in programming) {
    console.log(key);
    }

    //maps are not itrators so, we can't ue for-in in it 