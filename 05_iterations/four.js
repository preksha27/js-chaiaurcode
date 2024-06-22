const myObj = {
    js: 'Javascript',
    cpp:'c++',
    rb:'Ruby',
    swift:'swift by apple'
}
// for in loop to iterate objects
for (const key in myObj) {
  console.log(`${key} shotcut is for ${myObj[key]}`);
}

const programming = ["js","rb","py","java","cpp"]

for (const key in programming) {
 console.log(programming[key]);// gives value
}

// trying forin for maps
const map = new Map() // map is can object so thats why we use new to declare map
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('FR',"France")
map.set('IN',"India")

for (const keyy in map) {
   console.log(keyy);
}


// notes
//objects-forin
//arrays-forof,foreach
