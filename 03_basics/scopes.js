
var c =100 //anything which is written outside block is called GLOBAL scope
if(true){ // everything which is written inside a block is called BLOCK scope
    let a =10;
   const b = 20;
   var c = 30;
}
// var can be declared anywhere, but let and const can be accessed outside of the scope
console.log(c)

/// nested scope

function one(){
   const firstName = "prekshaN"
   function two(){
      const website = "youtube"
      console.log(firstName);
   }
   //console.log(website);//this scope is in function two because line by line execution takes place
   two()
}
one()

if (true) {
   const firstName = "prekshaa"
   if (firstName==="prekshaa") {
      const website = " insta"
      console.log(firstName+website);
      
   }
  // console.log(website);
   
}

//console.log(firstName);


//////////////////////////////////////important
console.log(addone(5))
function addone(num){ //when function is written as function then it can be called anytime before or after declaring
   return num+1
}
addTwo(5) // throws error that addTwo() cannot be accessed before initialisation
///can be written like this as well where a function is deaclred and holded in a variable, when done like this it cannot be called before declaring
const addTwo = function(num){
   return num+2
}


