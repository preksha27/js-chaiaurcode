//Immediately Invoked Function Expression(IIFE)
// to prevent pollution from the global scopes iife is used
(function prek(){
    //named iife
    console.log(`DB Connected`);
})(); // wrapping the function which will invoke that function immediately
//()(); // ; should be added to end the invoked function
//first () is where we are writing defination of the function
//second () is execution call

( ()=>{
    //unnamed iife
    console.log(`DB CONNECTED TWO`);
})();
( (fName)=>{
    //iife with a variable
    console.log(`DB CONNECTED TWO ${fName}`);
})('Preksha')
//NOTE:while writing 2 iife together always end the function with ; 