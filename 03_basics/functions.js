// Functions
// function is the keyword to write function and name of the function can be anything ex: anything(), {} defines the scope of the function 

function sayMyname() {
    console.log("p");
    console.log("r");
    console.log("e");
    console.log("k");
    console.log("s");
    console.log("h");
    console.log("a");


}  // this is the defination of the functions

sayMyname(); // sayMyName is the referance of the function and sayMyName() is the execution of the function
sayMyname // this does not give anything its just the refrence which tells functions is there
    
// function addTwoNumber(num1,num2){// when we are creating function definations the inputs we send is called PARAMETERS
//     console.log(num1 + num2 );
// }
// addTwoNumber(3,3) // passing the values to be added as arguements (while calling the function)

function addTwoNumbers(num1,num2){
    let result = num1+num2;
    return result 
}
console.log("Results",addTwoNumbers(3,4))

// different ways of passing arguements and parameters

function loginUserMessage(username ){    // we can give username as default so that undefined can be avoided  ex: username = "sam", so username can never be undefined and when new arguement is passed , username gets overridden
    if(!username){                               // ! converts true to false and false to true so , so by default undefined is considered as false , to get inside the block we use ! to convert username which is undefined to true and enter inside the block
        console.log("please enter a username")
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage("Preksha"));// if it is called without passing any arguement then it returns UNDEFINED
console.log(loginUserMessage("preksha"));
