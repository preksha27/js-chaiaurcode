let score = "33"

let valueInNumber = Number(score)
console.log(typeof valueInNumber);

// "33" =>33
// "33abc" => NaN (not a number) but whose type is number
// true => 1, false => 0

let isLoggedIn = 1

let booleanIsLoggedIn = Boolean(isLoggedIn)

console.log(booleanIsLoggedIn);

// 1 -> true,0 => false
// "" => false
// "Preksha" => true

let someNum = 33
let stringNumber = String(someNum)
console.log(stringNumber);
console.log(typeof stringNumber);

//////Operations/////

let value = 3
let negValue = -value
console.log(negValue);

let str1 = "preksha"
let str2 = "N c"
let str3 = str1 + str2
console.log(str3);

console.log("1"+2); // 12
console.log(1+"2"); // 12
console.log("1"+2 +2); // 122
console.log(1+2+"2");  //32

// tricky conversions

console.log(+true)
console.log(+"")

let gameCounter = 100
gameCounter++
console.log(gameCounter);

