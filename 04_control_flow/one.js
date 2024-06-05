// if
const isUserLoggdIn = true
const temp = 41
if(temp ===41){
    console.log("less  than 50");

}
else{console.log("temp is greater than 50");}

// < > >= <== == != ===(strict equal checks type of variable)

const score = 200

if (score >100){
    const power = "fly"
    console.log(`user power :${power}`);
}
//console.log(`user power :${power}`); // this will give error because power is not defined globally , it is defined under a scope

// short hand notationn
const balance = 1000
//if(balance>500) console.log("test"); 

// if(balance<500){
//     console.log("less than 500");
// }else if(balance <750){
//     console.log("less than 750");
// }else
// console.log("less than 1200");

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true
if(userLoggedIn && debitCard){        // && - and , 
    console.log("allow to buy course");
}
if(loggedInFromEmail || loggedInFromGoogle){ // || - or
    console.log("user logged in");
}

// Nullish coalescing operator(??) : null undefined

let val1 
//val1 = 5 ?? 10
//val1 = null ?? 10
//val1 = undefined ??15
val1 = null ?? 10 ?? 15
console.log(val1);

// terniary operator
//condition ? true : false
const price = 100
price<=80 ? console.log("less than 80"):console.log("more than 80");;