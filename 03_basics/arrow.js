const user = {
    userName:"preksh",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.userName} ,welcome to website`);//this keyword is used to acces variables under a scope, current context ko refer karta hai
        console.log(this);
    }



}
user.welcomeMessage()
user.userName="Hello"
user.welcomeMessage()

console.log(this);



const chai = function(){
    let username = "prek"
    console.log(this.username);
}
chai() // gives undefined

const chaii =() =>{
    let username = "prek"
    console.log(username);
}
chaii()

//syntex of arrow function  ()=>{} , we can hold arrow function in a variable for ex 
//const exampleOfArrowFunc= () => {}

const addtwo = (num1,num2)=>{
    return num1+num2;
}
console.log(addtwo(4,3));

//another way to use arrow function is implicit return, 
//NOTE:if arrow function is written in curly braces then return keyword should be written (explicit return)
const addtwo1 = (num1,num2)=> (num1+num2);
const returnObj = () => ({userr : "PREKSHA"}); // to return an object , it should always be wrapped in ()
console.log(returnObj())
console.log(addtwo(4,3));

