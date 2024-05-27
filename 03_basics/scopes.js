
var c =100 //anything which is written outside block is called GLOBAL scope
if(true){ // everything which is written inside a block is called BLOCK scope
    let a =10;
   const b = 20;
   var c = 30;
}
// var can be declared anywhere, but let and const can be accessed outside of the scope
console.log(c)