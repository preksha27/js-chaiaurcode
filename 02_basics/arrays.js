// arrays
// how to declare array

const myArr =[0,1,2,3,4];//elements in an array can be anything
// const myArr = new Array(0,1,2,3)
console.log(myArr[1]);

// array methods

myArr.push(6)
console.log(myArr)
console.log(myArr.length)
console.log(myArr.pop());// removes last element
console.log(myArr.includes(4));
 // slice splice
// slice -> cuts the array accoridng to ranges give but will not include range for ex if given 0 to 4 then it will take only 0,1,2,3
// splice -> cuts the array acording to the ranges gives inclued the max range but cuts the original array ex if array is [1,2,3,4,5,6] then .splice(2,4) then output is [2,3,4] but the original array will have [1,5,6] 
 console.log("A",myArr);
 const myNewArr1 = myArr.slice(1,3);
 console.log(myNewArr1);
 console.log("B",myArr);
 const myArr2 = myArr.splice(1,3);
 console.log(myArr2);
 console.log(myArr)