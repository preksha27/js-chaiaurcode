// for of(array specific loops)
["",""]//strings insidearray
[{},{}] // objects inside array

const arrrr=[1,2,3,4,5]

for (const num of arrrr) {
    console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
    if(greet===' ')
        continue
    
    console.log(`each char is ${greet}`);
    
    
}

// maps // holds key value pairs, and eleminates dulicate value and maintains the order

const map = new Map() // map is can object so thats why we use new to declare map
map.set('IN',"India")
map.set('USA',"United State of America")
map.set('FR',"France")
map.set('IN',"India")

console.log(map);

for (const [key, value] of map) {  // way to iterate maps
    console.log(key,':-',value)
}

const myOBJ = {
    'game1':'NFS',
    'game2':'Spiderman'
}
for (const [key,value] of myOBJ) {
    console.log(key,':-',value);
    
}