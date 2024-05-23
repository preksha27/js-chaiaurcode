// primitive(call by value)
// 7 types: strings,number,boolean,null(means empty),undefined(means value of a variable is not yet defined),symbol(uniqueness),BigInt



//Reference type (non primitive)
//arrays,objects,functions
//return type of arrays and functions is FUNCTION and return type of function is OBJECT FUNCTION
const heros = ["Spiderman","superman","batman"]
 let obj = {
    name:"preksha",
    age:24
 }

  let myFunction =function(){
    console.log("hello world");
  }


  /////////////////////////////////////

  // stack(primitive) and heap memory(non-primitive)
  //whenever stack memory -> whenever a variable is declared we will get a copy, whatever changes we do copy value gets changed
  //whenever heap memroy -> we get reference/ original value , whatever changes we do original value gets changed
//stack mempory , when change is made it is made to the copy value not the original so original value is not changed.
  let myYt = "preksha"
  let anotherName= myYt
  anotherName = "Rajath"
  console.log(myYt)
  console.log(anotherName)

  //heap memory, it takes reference so when userTwo's email got changed userOnes also got changed because it was already declared equal
  // all the changes are done to original
  let userOne = {
    email:"preksha@google.com",
    id:23
  }
  let userTwo = userOne
  userTwo.email = "gunda@google.com"

  console.log(userOne.email);
  console.log(userTwo.email);

