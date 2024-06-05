const userEmail = []

if(userEmail){
    console.log("got user email");
}else{
    console.log("dpnt have user email");
}

// falsy values
//false,0,-0,bigInt 0n, "", null, undefined,NaN
// truthy values
//[],"0","false"," ",[],{},function(){}(empty function)

if(userEmail.length===0){ // detect if an array is empty
    console.log("array is empty");
}

const emptyObject= {} // detect if an object is empty
if(Object.keys(emptyObject).length===0){
    console.log("object is empty");
}